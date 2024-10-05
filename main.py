from flask import Flask, request, jsonify
import pandas as pd

# Load the dataset (preload for performance)
data = pd.read_csv('/CICHacks/processed_sustainability_ratings.csv')

app = Flask(__name__)

# Route to handle sustainability score requests
@app.route('/getSustainabilityScore', methods=['GET'])
def get_sustainability_score():
    # Get the product type from the request
    product_type = request.args.get('product_type', '').strip()

    # Search for the product type in the dataset
    result = data[data['Product_Type'].str.lower() == product_type.lower()]

    # Check if the product was found
    if not result.empty:
        # Get the first match (since there should only be one)
        result_row = result.iloc[0]
        rating = result_row['sustainability_rating']
        category = result_row['sustainability_category']
        
        # Create a response with the rating and category
        return jsonify({
            'product_type': product_type,
            'sustainability_rating': rating,
            'sustainability_category': category
        })
    else:
        # Return a response indicating the product was not found
        return jsonify({
            'error': 'Product type not found'
        }), 404

# Run the app
if __name__ == '__main__':
    app.run(debug=True)

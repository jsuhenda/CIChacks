// used to detect when a user hovers over a product

// document.addEventListener('mouseover', function (event) {
//     const productElement = event.target.closest('.product-item');  // Adjust this selector
  
//     if (productElement) {
//       const productName = productElement.querySelector('.product-name').textContent;
      
//       // Call the Lambda function to get sustainability info
//       fetch(`https://aws-lambda-endpoint/?productName=${productName}`)
//         .then(response => response.json())
//         .then(data => {
//           // Populate the pop-up with product data
//           document.getElementById('productName').textContent = productName;
//           document.getElementById('sustainabilityRating').textContent = `Sustainability Score: ${data.rating}%`;
//           document.getElementById('ratingBar').style.width = `${data.rating
//         })

//     }
//  })
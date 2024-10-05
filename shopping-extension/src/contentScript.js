document.addEventListener('mouseover', function (event) {
    // List common product-related classes or tags used across e-commerce websites
    const productSelectors = [
        '.product', '.item', '.product-tile', '.product-item', '.product-card', '.product-list-item',
        'a[data-product-id]', '.product-link'
    ];

    // Check if the hovered element matches any common product selectors
    let product = null;
    for (let selector of productSelectors) {
        product = event.target.closest(selector);
        if (product) break;
    }

    if (product) {
        console.log('Product hovered:', product);

        // Get the product name (adjust the selector based on actual HTML)
        const productNameElement = product.querySelector('.product-name'); // Adjust this class as needed
        const productName = productNameElement ? productNameElement.textContent.trim() : 'Product name not found';

        // Remove existing pop-up to avoid duplicates
        const existingPopup = document.querySelector('.popup-widget');
        if (existingPopup) existingPopup.remove();

        // Create and style a pop-up
        const popup = document.createElement('div');
        popup.classList.add('popup-widget');
        popup.style.position = 'absolute';
        popup.style.backgroundColor = '#b2d790';
        popup.style.border = '1px solid #ddd';
        popup.style.padding = '10px';
        popup.style.zIndex = 1000;
        popup.style.top = event.pageY + 'px';
        popup.style.left = event.pageX + 'px';
        popup.style.borderRadius = '10px';  // This rounds the corners
        popup.style.backgroundImage = 'url("https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm00NTUtMTAwNy1rdzYyZXR6dS5qcGc.jpg")';  // Replace with your image URL
        popup.style.backgroundSize = 'cover';  // Make sure the image covers the entire background
        popup.style.backgroundPosition = 'center';  // Center the image
        popup.style.fontFamily = 'Comic Sans MS, sans-serif';
        popup.style.color = '#663300'; // Set text color

        popup.innerHTML = `
        <div class="popup-title">
            <h1 style="font-family: 'Comic Sans MS', sans-serif;">Product Name:</h1>
            <p>${productName}</p> <!-- Display the product name here -->
        </div>
        <div class="progress-bar">
            <div class="progress" style="width: 35%;">35%</div>
        </div>
        <label for="file">Sustainability Score:</label>
        <progress id="file" value="32" max="100">32%</progress>
        `;

        document.body.appendChild(popup);

        // Remove the pop-up when the mouse leaves the product
        product.addEventListener('mouseleave', function () {
            if (popup) popup.remove();
        });
    }
});


// document.addEventListener('mouseover', function (event) {
//     // List common product-related classes or tags used across e-commerce websites
//     const productSelectors = [
//         '.product', '.item', '.product-tile', '.product-item', '.product-card', '.product-list-item',
//         'a[data-product-id]', '.product-link'
//     ];

//     // Check if the hovered element matches any common product selectors
//     let product = null;
//     for (let selector of productSelectors) {
//         product = event.target.closest(selector);
//         if (product) break;
//     }

//     if (product) {
//         console.log('Product hovered:', product);

//         // Remove existing pop-up to avoid duplicates
//         const existingPopup = document.querySelector('.popup-widget');
//         if (existingPopup) existingPopup.remove();

//         // Create and style a blank pop-up
//         const popup = document.createElement('div');
//         popup.classList.add('popup-widget');
//         popup.style.position = 'absolute';
//         popup.style.backgroundColor = '#b2d790';
//         popup.style.border = '1px solid #ddd';
//         popup.style.padding = '10px';
//         popup.style.zIndex = 1000;
//         popup.style.top = event.pageY + 'px';
//         popup.style.left = event.pageX + 'px';
//         popup.style.borderRadius = '10px';  // This rounds the corners
//         popup.style.backgroundImage = 'url("https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm00NTUtMTAwNy1rdzYyZXR6dS5qcGc.jpg")';  // Replace with your image URL
//         popup.style.backgroundSize = 'cover';  // Make sure the image covers the entire background
//         popup.style.backgroundPosition = 'center';  // Center the image
//         popup.style.fontFamily = 'Comic Sans MS, sans-serif';
//         popup.style.color = '#663300'; // Set text color

//         // Fetch product details using the product link or ID
//         const productLink = product.querySelector('a').href; // Get product link
//         fetchProductDetails(productLink).then(productDetails => {
//             // Update the popup with the fetched product details
//             popup.innerHTML = `
//                 <div class="popup-title">
//                     <h1 style="font-family: 'Comic Sans MS', sans-serif;">Sustainability Rating:</h1>
//                 </div>
//                 <div class="progress-bar">
//                     <div class="progress" style="width: ${productDetails.sustainabilityScore}%;">${productDetails.sustainabilityScore}%</div>
//                 </div>
//                 <label for="file">Sustainability Score:</label>
//                 <progress id="file" value="${productDetails.sustainabilityScore}" max="100"> ${productDetails.sustainabilityScore} % </progress>
//                 <div>${productDetails.description}</div> <!-- Display the description -->
//             `;
//         }).catch(error => {
//             console.error('Error fetching product details:', error);
//             popup.innerHTML = '<div>Error fetching product details.</div>';
//         });

//         document.body.appendChild(popup);

//         // Remove the pop-up when the mouse leaves the product
//         product.addEventListener('mouseleave', function () {
//             if (popup) popup.remove();
//         });
//     }
// });

// // Function to fetch product details from the product detail page
// async function fetchProductDetails(productUrl) {
//     try {
//         // Make a request to fetch the product detail page HTML
//         const response = await fetch(productUrl);
//         const html = await response.text();

//         // Parse the HTML to extract the product description
//         const parser = new DOMParser();
//         const doc = parser.parseFromString(html, 'text/html');
//         const metaDescription = doc.querySelector('meta[property="og:description"]');
//         const sustainabilityScore = Math.floor(Math.random() * 100); // Mock sustainability score for demonstration

//         return {
//             description: metaDescription ? metaDescription.content : 'No description available.',
//             sustainabilityScore: sustainabilityScore // Replace with actual score calculation
//         };
//     } catch (error) {
//         console.error('Failed to fetch product details:', error);
//         throw error; // Re-throw the error to handle it in the hover event
//     }
// }

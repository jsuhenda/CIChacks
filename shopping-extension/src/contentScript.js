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

        // Remove existing pop-up to avoid duplicates
        const existingPopup = document.querySelector('.popup-widget');
        if (existingPopup) existingPopup.remove();

        // Create and style a blank pop-up
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
        <div class = "popup-title">
            <h1 style="font-family: 'Comic Sans MS', sans-serif;">Sustainability Rating:</h1>
        </div>
            <div class="progress-bar">
                <div class="progress" style="width: 35%;">35%</div>
            </div>
            <label for="file">Sustainability Score:</label>
            <progress id="file" value="32" max="100"> 32% </progress>
        `;

        document.body.appendChild(popup);

        // Remove the pop-up when the mouse leaves the product
        product.addEventListener('mouseleave', function () {
            if (popup) popup.remove();
        });
    }
});
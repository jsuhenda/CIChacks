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

        // Create a blank pop-up element
        const popup = document.createElement('div');
        popup.classList.add('popup-widget');
        popup.style.position = 'absolute';
        popup.style.backgroundColor = '#fff';
        popup.style.border = '1px solid #ddd';
        popup.style.padding = '10px';
        popup.style.zIndex = 1000;
        popup.style.top = event.pageY + 'px';
        popup.style.left = event.pageX + 'px';

        // Load the external HTML content
        fetch(chrome.runtime.getURL('popup-content.html'))
            .then(response => response.text())
            .then(data => {
                // Inject the loaded HTML into the popup
                popup.innerHTML = data;
            })
            .catch(error => {
                // Handle errors if the HTML file couldn't be loaded
                popup.innerHTML = '<p>Failed to load content.</p>';
                console.error('Error loading popup-content.html:', error);
            });

        document.body.appendChild(popup);

        // Remove the pop-up when the mouse leaves the product
        product.addEventListener('mouseleave', function () {
            if (popup) popup.remove();
        });
    }
});

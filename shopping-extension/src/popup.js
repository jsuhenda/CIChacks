chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "showPopup") {
      let productId = request.productId;
      
      // Use backticks for string interpolation
      document.querySelector('h1').textContent = `Product ID: ${productId}`;
      document.querySelector('p').textContent = `Sustainability Rating: 85%`;
    }
  });
  
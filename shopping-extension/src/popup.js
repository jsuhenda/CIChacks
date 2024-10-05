chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "showPopup") {
      let productId = request.productId;
  
      // Fetch sustainability rating and alternative products (from backend or API)
      document.querySelector('h1').textContent = Product ID: ${productId};
      document.querySelector('p').textContent = Sustainability Rating: 85%;
    }
  });
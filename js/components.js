// Function to load an HTML component into a target element by ID
function loadComponent(targetId, url) {
  fetch(url)
    .then(response => response.text())
    .then(data => {
      document.getElementById(targetId).innerHTML = data;
    })
    .catch(error => {
      console.error(`Error loading ${url}:`, error);
    });
}

document.addEventListener("DOMContentLoaded", function() {
  loadComponent("header", "components/header.html");
  loadComponent("footer", "components/footer.html");
}); 
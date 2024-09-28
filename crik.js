// Smooth Scroll to Sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
// Google Maps Initialization
function initMap() {
    var mapOptions = {
      zoom: 4,
      center: { lat: 20.5937, lng: 78.9629 }, // India (for example)
    };
    var map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);
  
    // Example Player Location (Sachin Tendulkar - Mumbai)
    var marker = new google.maps.Marker({
      position: { lat: 19.0760, lng: 72.8777 },
      map: map,
      title: 'Sachin Tendulkar - Mumbai',
    });
  
    // Add more player locations here
  }
  
  window.initMap = initMap;
    
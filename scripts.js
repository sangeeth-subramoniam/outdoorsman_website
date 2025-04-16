// Simple script to handle the contact form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for reaching out! We will get back to you shortly.');
});


// Initialize the map
function initMap() {
    // Specify the location (latitude, longitude)
    var location = { lat: 37.7749, lng: -122.4194 }; // Example: San Francisco

    // Create a map centered at the location
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: location
    });

    // Add a marker at the location
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}

function sendSOS() {
    document.getElementById("status").innerText = "SOS Sent! Help is on the way 🚑";

    // Optional: get location
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("Latitude: " + position.coords.latitude);
            console.log("Longitude: " + position.coords.longitude);
        });
    }
}

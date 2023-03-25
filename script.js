const mapDiv = document.getElementById("map");
const getLocationBtn = document.getElementById("get-location-btn");

function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  
  localStorage.setItem("lat", latitude);
  localStorage.setItem("long", longitude);

 
  const map = new google.maps.Map(mapDiv, {
    center: { lat: latitude, lng: longitude },
    zoom: 8
  });


  const marker = new google.maps.Marker({
    position: { lat: latitude, lng: longitude },
    map: map,
    title: "Your location"
  });
}


const savedLatitude = localStorage.getItem("lat");
const savedLongitude = localStorage.getItem("long");

if (savedLatitude && savedLongitude) {
 
  const map = new google.maps.Map(mapDiv, {
    center: { lat: parseFloat(savedLatitude), lng: parseFloat(savedLongitude) },
    zoom: 8
  });


  const marker = new google.maps.Marker({
    position: { lat: parseFloat(savedLatitude), lng: parseFloat(savedLongitude) },
    map: map,
    title: "Your saved location"
  });
}

getLocationBtn.addEventListener("click", getLocation);
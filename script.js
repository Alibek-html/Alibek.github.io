let map;
let markers = [];
const almaty = {lat: 43.24034016826809, lng: 76.89048021805706};
const navat = {lat: 43.25289749195694, lng: 76.93318607265283};
let flightPath;
const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<h1 id="firstHeading" class="firstHeading">Магазин \"ЗОиЭ\"</h1>' +
    '<div id="bodyContent">' +
    "<p><b>Магазин \"ЗОиЭ\"</b>, которая расшифровывается как \"Магазин Зимних Одежд и Экипировок, " +
    "sandstone rock formation in the southern part of the " +
    "Northern Territory, central Australia. It lies 335&#160;km (208&#160;mi) " +
    "south west of the nearest large town, Alice Springs; 450&#160;km " +
    "(280&#160;mi) by road. Kata Tjuta and Uluru are the two major " +
    "features of the Uluru - Kata Tjuta National Park. Uluru is " +
    "sacred to the Pitjantjatjara and Yankunytjatjara, the " +
    "Aboriginal people of the area. It has many springs, waterholes, " +
    "rock caves and ancient paintings. Uluru is listed as a World " +
    "Heritage Site.</p>" +
    '<p>Attribution: Navat, <a href="https://navat.com.kz/almaty/">' +
    "https://navat.com.kz/almaty/</a> " +
    "(last visited June 22, 2009).</p>" +
    "</div>" +
    "</div>";
let infowindow;

function initMap() {
  
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 13,
    center: almaty,
    mapTypeId: "terrain",
  });

  infowindow = new google.maps.InfoWindow({
    content: contentString,
  });

  addMarker(navat);
  setMapListener();

}

function setMapListener() {
  map.addListener("click", (event) => {
    addMarker(event.latLng);
  });
}


function addMarker(location) {
  const marker = new google.maps.Marker({
    position: location,
    map: map,
  });

  if (location == navat) {
    marker.addListener("click", () => {
      infowindow.open(map, marker);
    });  
  }

  setMapOnAll(null);
  markers = [];
  markers.push(marker);
}

function setMapOnAll(map) {
  for (let i = 0; i < markers.length; i++) {
    markers[i].setMap(map);
  }
}

function ownMarker() {
  addMarker(navat);
}

function hovering(element) {
  element.style.backgroundColor = "rgb(235, 235, 235)";
}

function unhovering(element) {
  element.style.backgroundColor = "rgb(255, 255, 255)";
}

/////////////////////////////////^ Google Map ^/////////////////////////////////

function openSignin() {
  document.getElementById("myForm").style.display = "block";
}

function closeSignin() {
  document.getElementById("myForm").style.display = "none";
}

function openSigning() {
  document.getElementById("signing").style.display = "block"
}

function closeSigning() {
  document.getElementById("signing").style.display = "none";
}

function openSignup() {
  document.getElementById("signup").style.display = "block";
}

function closeSignup() {
  document.getElementById("signup").style.display = "none";
}

/////////////////////////////////^ JOIN POPUP ^/////////////////////////////////
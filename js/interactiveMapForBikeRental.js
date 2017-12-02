"use strict";

//---------------------------------------------------------------------
//---------- Slider properties ----------------------------------------
//---------------------------------------------------------------------

// Add listners on the "previous" and "next" buttons

var activeSlide = 1;

$(".controls").on("click", ".button-next", function () {
    switch (activeSlide) {
    case 1:
        $("#slide1").removeClass("slide-active");
        $("#slide2").addClass("slide-active");
        activeSlide += 1;
        break;
    case 2:
        $("#slide2").removeClass("slide-active");
        $("#slide3").addClass("slide-active");
        activeSlide += 1;
        break;
    case 3:
        $("#slide3").removeClass("slide-active");
        $("#slide4").addClass("slide-active");
        activeSlide += 1;
        break;
    case 4:
        $("#slide4").removeClass("slide-active");
        $("#slide5").addClass("slide-active");
        activeSlide += 1;
        break;
    case 5:
        $("#slide5").removeClass("slide-active");
        $("#slide1").addClass("slide-active");
        activeSlide = 1;
        break;
    default:
        //code block
    }
});

$(".controls").on("click", ".button-previous", function () {
    switch (activeSlide) {
    case 1:
        $("#slide1").removeClass("slide-active");
        $("#slide5").addClass("slide-active");
        activeSlide = 5;
        break;
    case 2:
        $("#slide2").removeClass("slide-active");
        $("#slide1").addClass("slide-active");
        activeSlide -= 1;
        break;
    case 3:
        $("#slide3").removeClass("slide-active");
        $("#slide2").addClass("slide-active");
        activeSlide -= 1;
        break;
    case 4:
        $("#slide4").removeClass("slide-active");
        $("#slide3").addClass("slide-active");
        activeSlide -= 1;
        break;
    case 5:
        $("#slide5").removeClass("slide-active");
        $("#slide4").addClass("slide-active");
        activeSlide -= 1;
        break;
    default:
        //code block
    }
});

//---------------------------------------------------------------------
//---------- Map properties -------------------------------------------
//---------------------------------------------------------------------

// Initialise the map in the <div id="map"> with the given options
var map;

function initMap() {
    var mapOptions = {
        zoom: 11,
        center: new google.maps.LatLng(48.85, 2.34),
        mapTypeId: 'terrain'
    };
    map = new google.maps.Map(document.getElementById('map'), mapOptions);
}

// Get the data from the  JCDecaux Api
ajaxGet("https://api.jcdecaux.com/vls/v1/stations?contract=Paris&apiKey=e35e4bf5064e9ecc9124d5f47ef2b10e50ca7e61", function (reponse) {
    // Convert the JSON in a Javascript array
    var stations = JSON.parse(reponse);
    // Create a "markers" array
    var markers = [];
    // For each station of the "stations" array:
    // - Create a marker on the map
    // - Add the marker to the "markers" array
    // - 
    stations.forEach(function (station) {
        var marker = new google.maps.Marker({
            position: station.position,
            map: map,
            title: station.name
        });
        markers.push(marker);
        marker.addListener("click", function toggleBounce() {
            if (marker.getAnimation() !== null) {
                marker.setAnimation(null);
            } else {
                marker.setAnimation(google.maps.Animation.BOUNCE);
            }
        });
    });
    // Add a marker clusterer to manage the markers
    var markerCluster = new MarkerClusterer(map, markers, {
        imagePath: "images/m/m"
    });
    console.log(stations);
});

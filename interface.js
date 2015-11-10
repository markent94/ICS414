/**
 * Created by SlyMongoose on 11/8/2015.
 */

var myVar = setInterval(myTimer, 5000);

function myTimer() {
    var d = new Date();
    document.getElementById("answer").innerHTML = d.toLocaleTimeString();
}

//var x = document.getElementById("demo");
//
//function getGeoLocation() {
//    if (navigator.geolocation) {
//        navigator.geolocation.getCurrentPosition(showPosition);
//    } else {
//        x.innerHTML = "Geolocation is not supported by this browser.";
//    }
//}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

var homeX = 21.294846;
var homeY = -157.813323;
var workX = 21.297614;
var workY = -157.841039;
var schoolX = 21.299940;
var schoolY = -157.819161;
var queensX = 21.308444;
var queensY = -157.853346;
var kaiserX = 21.363877;
var kaiserY = -157.899807;
var dangerX = 21.262820;
var dangerY = -157.824653;

function getLocation(userX, userY) {
    var a = document.getElementById("xCoord").value - userX;
    var b = document.getElementById("yCoord").value - userY;

    var c = Math.sqrt( a*a + b*b );

    document.getElementById("answer").innerHTML = document.getElementById("xCoord").value;
}



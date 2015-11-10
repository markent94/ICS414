/**
 * Created by SlyMongoose on 11/8/2015.
 */
var website;
var cycletime;
var range;

console.log("hello");

var getsite = function () {
    website = prompt("Please enter a website");
}

var getcycle = function () {
    cycletime = prompt("Please enter cycle 	time");
}

var getrange = function () {
    range = prompt("Please enter a range");
}

var myVar = setInterval(myTimer, 5000);

function myTimer() {
    var d = new Date();
    document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}


var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}
getsite();
getcycle();
getrange();

document.write(website + " " + cycletime + " " + range);


//Mark Bercasio: var a = x1 - x2
//var b = y1 - y2
//
//var c = Math.sqrt( a*a + b*b );
//limit > number
//color black
//for input
//we need user location
//current user gps
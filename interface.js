/**
 * Created by SlyMongoose on 11/8/2015.
 */

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

function getInteger(xCoord, yCoord) {
    var a = xCoord;
    var b = yCoord;

    var c = Math.sqrt(Math.pow(a-homeX,2)+ Math.pow(b-homeY,2));
    c = Math.sqrt(Math.pow(a-workX,2)+ Math.pow(b-workY,2));
    c = Math.sqrt(Math.pow(a-schoolX,2)+ Math.pow(b-schoolY,2));
    c = Math.sqrt(Math.pow(a-queensX,2)+ Math.pow(b-queensY,2));
    c = Math.sqrt(Math.pow(a-kaiserX,2)+ Math.pow(b-kaiserY,2));
    c = Math.sqrt(Math.pow(a-dangerX,2)+ Math.pow(b-dangerY,2));

    if(c < 1) {

        document.getElementById("answer").innerHTML = "1";
        return 1;
    }
    else
    //else {
    //    c = Math.sqrt(Math.pow(a-workX,2)+ Math.pow(b-workY,2));
    //    if(c <1) {
    //
    //    }
    //    else {
    //
    //    }
    //}


    document.getElementById("answer").innerHTML = c;
}

function getCurrentLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("answer").innerHTML = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    getInteger(position.coords.latitude, position.coords.longitude);
}

function getNewLocation() {
    getInteger(document.getElementById("xCoord").value, document.getElementById("yCoord").value);
}


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

getsite();
getcycle();
getrange();
document.write(website + " " + cycletime + " " + range);
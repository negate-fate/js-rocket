// Explanations

// variables (lesson 7)

var favColor = 'blue';
var myFavColors = ['blue', 'red', 'green'];
var numOfFavColors = 3;
var hasGotFavColors = false;
var richObject = {
	firstName: "Rich",
	lastName: "Armstrong",
	favColors: ['blue', 'red', 'green'],
	yearsAlive: 103,
	isMale: true
};

// functions (lesson 8)

var whatIsMyFavColor = function () {
	return 'orange';
}

var doSomething = function () {
	console.log("do something!!!");
}

var area = function (width, height) {
	return width * height;
}

var fullname = function (firstname, secondname) {
	return firstname + " " + secondname;
}

// the if-else statement (lesson 9)

var name1 = "Rich";
var name2 = "Bob";

if (name1 == "Rich") {
	alert("true 1!");
} else if (name2 == "Rich") {
	alert("true 2!");
} else {
	alert("false!");
}

if (name1 == "Rich" || name2 == "Rich") {
	alert("true!");
} else {
	alert("false!");
}
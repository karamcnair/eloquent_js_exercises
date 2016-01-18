
var p = require("./printer.js");

var Animal = {
	type: "animal",
	eats: function () { console.log("protein");},
	breathes: function() { console.log("air");},
	moves: function() { console.log("wriggle")}
};

var Fish = Object.create(Animal);

Fish.breathes = function() {console.log("water");};
Fish.moves = function() {console.log("swim");};
Fish.type = "fish";

var Mudskipper = Object.create(Fish);

Mudskipper.breathes = function() {console.log("air, water");};
Mudskipper.moves = function() {console.log("walk, swim");};
Mudskipper.type = "mudskipper";

console.log();
p.printHeader("Fish:");
p.printObject(Fish);
console.log();

p.printHeader("Mudskipper:");
p.printObject(Mudskipper);

// Fish.type = "FISH!";

// p.printHeader("Mudskipper:");
// p.printObject(Mudskipper);

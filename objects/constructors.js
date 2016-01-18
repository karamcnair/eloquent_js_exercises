
var p = require("./printer.js");

function Animal() {
	this.type = "animal";
	this.eats = function () { console.log("protein");},
	this.breathes = function() { console.log("air");},
	this.moves = function() { console.log("wriggle")}
}


// do we do this?
// the prototype of Fish is the constructor function! 
// var Fish = new Animal();

// Fish.breathes = function() {console.log("water");};
// Fish.moves = function() {console.log("swim");};

// console.log(Object.getPrototypeOf(Fish));
// console.log(Object.getPrototypeOf(Fish).constructor);

// console.log();
// p.printHeader("Fish:");
// p.printObject(Fish);
// console.log();


// OR this? 
function Fish () {
	this.type = "fish";
}

// // what if we forget this last part?

Fish.prototype = new Animal();
Fish.prototype.breathes = function() {console.log("water");};
Fish.prototype.moves = function() {console.log("swim");};

var f = new Fish();


p.printHeader("Fish:");
p.printObject(f);
console.log();


// function Mudskipper() {
// 	this.type = "mudskipper";
// }
// Mudskipper.prototype = new Fish();

// var m = new Mudskipper();

// p.printHeader("Mudskipper:");
// p.printObject(m);
// console.log();


// // console.log();
// // p.printHeader("Fish:");
// // p.printObject(Fish);
// // console.log();


// // var Mudskipper = new Fish();

// // so how do we subclass Fish? 


// // Mudskipper.breathes = function() {console.log("air, water");};
// // Mudskipper.moves = function() {console.log("walk, swim");};

// // console.log();
// p.printHeader("Fish:");
// p.printObject(Fish);
// console.log();

// p.printHeader("Mudskipper:");
// p.printObject(Mudskipper);

// Mudskipper.breathes();
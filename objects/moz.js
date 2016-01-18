// The object being inherited from is known as the prototype, and the inherited 
// properties can be found in the prototype object of the constructor.
// (does that mean that in the Object.create situation, there's an implicit Object 
// constructor?) (JS-TGP)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
// The new operator creates an instance of a user-defined object type or of one 
// so, yes. of the built-in object types that has a constructor function.



function Person(name, age, sex) {
  this.name = name;
  this.age = age;
  this.sex = sex;
}
var rand = new Person("Rand McKinnon", 33, "M");
var ken = new Person("Ken Jones", 39, "M");

function Car(make, model, year, owner) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owner = owner;
}
var car1 = new Car("Eagle", "Talon TSi", 1993, rand);
var car2 = new Car("Nissan", "300ZX", 1992, ken);

// Animal properties and method encapsulation
var Animal = {
  type: "Invertebrates", // Default value of properties
  displayType : function(){  // Method which will display type of Animal
    console.log(this.type);
  }
}

// Create new animal type called animal1 
var animal1 = Object.create(Animal);
animal1.displayType(); // Output:Invertebrates

// Create new animal type called Fishes
var fish = Object.create(Animal);
fish.type = "Fishes";
fish.displayType(); // Output:Fishes

console.log("");

console.log("the prototype object of the constructor for Person", Person.prototype);
console.log("the prototype object of the constructor for Car", Car.prototype);
console.log("the prototype object of the constructor for Animal (doesn't have one) ", Animal.prototype);
console.log("");

console.log("the prototype object of Person", Object.getPrototypeOf(Person));
console.log("the prototype object of _a_ Person", Object.getPrototypeOf(rand));
console.log("");

console.log("the prototype object of Car", Object.getPrototypeOf(Car));
console.log("the prototype object of _a_ Car", Object.getPrototypeOf(car1));
console.log("");

console.log("the prototype object of Animal", Object.getPrototypeOf(Animal));
console.log("the prototype object of _an_ Animal", Object.getPrototypeOf(fish));



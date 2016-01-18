// TODO DEEP DIVE INTO THIS LINK
// http://stackoverflow.com/questions/1646698/what-is-the-new-keyword-in-javascript


ObjMaker = function() {this.a = 'first';};
// ObjMaker is just a function, there's nothing special about it that makes 
// it a constructor.

ObjMaker.prototype.b = 'second';

// KLM - THIS IS SUPPOSED TO BE ILLEGAL!
Function.prototype.b = 'second';
// like all functions, ObjMaker has an accessible prototype property that 
// we can alter. I just added a property called 'b' to it. Like 
// all objects, ObjMaker also has an inaccessible [[prototype]] property
// that we can't do anything with

obj1 = new ObjMaker();
// 3 things just happened.
// A new, empty object was created called obj1.  At first obj1 was the same
// as {}. The [[prototype]] property of obj1 was then set to the current
// object value of the ObjMaker.prototype (if ObjMaker.prototype is later
// assigned a new object value, obj1's [[prototype]] will not change, but you
// can alter the properties of ObjMaker.prototype to add to both the
// prototype and [[prototype]]). The ObjMaker function was executed, with
// obj1 in place of this... so obj1.a was set to 'first'.

obj1.a;
// returns 'first'
obj1.b;
// obj1 doesn't have a property called 'b', so JavaScript checks 
// its [[prototype]]. Its [[prototype]] ***is the same as ObjMaker.prototype***
// ObjMaker.prototype has a property called 'b' with value 'second'
// returns 'second'

// KLM because of this sentence 
// The object being inherited from is known as the prototype, and the inherited 
// properties can be found ***in the prototype object of the constructor***.
// (does that mean that in the Object.create situation, there's an implicit Object 
// constructor?) (JS-TGP)
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new
// The new operator creates an instance of a user-defined object type or of one 
// so, yes. of the built-in object types that has a constructor function.


console.log(Object.getPrototypeOf(obj1));
console.log(ObjMaker.prototype);
console.log(Object.getPrototypeOf(ObjMaker));
console.log(Object.getPrototypeOf(Function));
console.log(Function.prototype);
console.log(Function.prototype.constructor);

for (var prop in Object.getPrototypeOf(Function)) {
	console.log(prop);
}

for (var prop in Function.prototype) {
	console.log(prop);
}


// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new

// When the code new Foo(...) is executed, the following things happen:

// 1) A new object is created, inheriting from Foo.prototype. 
// 2) The constructor function Foo is called with the specified arguments and this bound to the newly created object. new Foo is equivalent to new Foo(), i.e. if no argument list is specified, Foo is called without arguments.
// 3) The object returned by the constructor function becomes the result of the whole new expression. 
// If the constructor function doesn't explicitly return an object, the object created in step 1 KLM TODO TRY THIS
// is used instead. (Normally constructors don't return a value, but they can choose to do so if they want to override the normal object creation process.)


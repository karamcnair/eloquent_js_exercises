// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new

// > Car.prototype.color = null;
// null
// > console.log(car1.color);    // null
// null
// undefined
// >
// > car1.color = "black";
// 'black'
// > console.log(car1.color);   // black
// black
// undefined
// > Car.prototype.colour = null
// null
// NOTE - b/c it lives on the prototype, you get a default set for all current AND future objects
// > Car.prototype.colour = "black";
// 'black'
// > console.log(car1.colour);
// black
// undefined
// >

// VERSUS
// > var car2 = Object.create(car1);
// undefined
// > console.log(car2.colour);
// black
// undefined
// > Car.prototype.finish = "matte";
// 'matte'
// > console.log(car1.finish);
// matte
// undefined
// > console.log(car2.finish);
// matte
// undefined
// >

// http://stackoverflow.com/questions/4166616/understanding-the-difference-between-object-create-and-new-somefunction

// The object used in Object.create actually forms the prototype of the new object, 
// where as in the new Function() form the declared properties/functions do not form the prototype.
// Yes, Object.create builds an object that inherits directly from the one passed as its first argument.

// With constructor functions, the newly created object inherits from the constructor's prototype, e.g.:

// var o = new SomeConstructor();
// In the above example, o inherits directly from SomeConstructor.prototype.
history
// There's a difference here, with Object.create you can create an object that doesn't 
// inherit from anything, Object.create(null);, on the other hand, if you set 
// SomeConstructor.prototype = null; the newly created object will inherit from Object.prototype.

// Very simply said, new X is Object.create(X.prototype) with additionally running the constructor function. 
// (And giving the constructor the chance to return the actual object that 
// should be the result of the expression instead of this.)

// That’s it. :)

// The rest of the answers is just confusing, because apparently nobody else read the definition of new either. ;)



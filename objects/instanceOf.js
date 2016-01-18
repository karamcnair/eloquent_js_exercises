function A () {
  this.a = 1;
}
function B () {
  this.b = 2;
}
B.prototype = new A();
B.prototype.constructor = B;

function C () {
  this.c = 3;
}
C.prototype = new B();
C.prototype.constructor = C;

var c = new C();

// instanceof expects a constructor function

c instanceof A; // true
c instanceof B; // true
c instanceof C; // true

c instanceof A; // true
c instanceof B; // true
c instanceof C; // true


console.log("C = ", JSON.stringify(C));
console.log("C.prototype= ", JSON.stringify(C.prototype));
console.log("C.prototype.constructor= ", JSON.stringify(C.prototype.constructor));




console.log("c.prototype= ", JSON.stringify(c.prototype));
// console.log("c.prototype.constructor= ", JSON.stringify(c.prototype.constructor));

// isPrototypeOf, can be used on any object
A.prototype.isPrototypeOf(c); // true
B.prototype.isPrototypeOf(c); // true
C.prototype.isPrototypeOf(c); // true

console.log("c = ", JSON.stringify(c));

function listAllProperties(o){     
	var objectToInspect;     
	var result = [];
	
	for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)){  
		result = result.concat(Object.getOwnPropertyNames(objectToInspect));  
	}
	
	return result; 
}


console.log(listAllProperties(c));

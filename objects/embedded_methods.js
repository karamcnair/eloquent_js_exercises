var p = require("./printer.js");

// I am the person constructor.
function Person1( name ){
    // Store the property.
    this.name = name;
}
// Set up the class methods.
Person1.prototype.getName = function(){
    return( this.name );
};


function Person2( name ) {
	this.name = name;
	this.getName = function(){
    	return( this.name );
 	};
}


var lisa = new Person1("Lisa");
var bart = new Person2("Bart");

p.printHeader("Lisa");
p.printObject(lisa);
p.printHeader("Bart");
p.printObject(bart);

bart.getName = function() {return this.name + "!";};

lisa.getName = function() {return this.name + "!";};

p.printHeader("Lisa");
p.printObject(lisa);
p.printHeader("Bart");
p.printObject(bart);

lisa.getName = "Lisa"; 

bart.getName = "Bart";

p.printHeader("Lisa");
p.printObject(lisa);
p.printHeader("Bart");
p.printObject(bart);
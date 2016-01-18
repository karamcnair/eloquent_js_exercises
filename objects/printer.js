var chalk = require('chalk');
var colours = ['white', 'green', 'cyan', 'yellow', 'magenta', 'blue', 'white', 'grey'];

colourString = function(string, depth) {
	// return chalk[colours[0]](string);

	return chalk[colours[depth]](string);
};

exports.printHeader = function(string) {
	console.log("");
	console.log(string);
	console.log(Array(string.length).join("=="));
};

exports.printObject = function(obj) {
	printObjectR(obj,1);
}

printObjectR = function(obj, depth) {
	var next_proto = Object.getPrototypeOf(obj);

	if (next_proto === null) 
		return;

	var indentString = Array(depth).join("  ");

	console.log(colourString(indentString + next_proto, depth));

	console.log(colourString(indentString + "{", depth));

	// print inherited first
	printObjectR(next_proto, depth + 1);
	
	var props = Object.getOwnPropertyNames(obj);
	props.forEach (function(prop) {
		console.log(colourString(indentString + "  " + prop + ":" + obj[prop], depth));
	});

	console.log(colourString(indentString + "}", depth));
}

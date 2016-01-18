var chalk = require('chalk');

var empty_object = {};

// creating an object as a literal - prototype is ? {}
var stooge = {
    "first-name": "Jerome",
    "last-name": "Howard"
};

stooge['middle-name'] = 'Lester';
stooge.nickname = 'Curly';



var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;
    // nick is 'Curly' because x and stooge
    // are references to the same object

var a = {}, b = {}, c = {};
    // a, b, and c each refer to a
    // different empty object
a = b = c = {};
    // a, b, and c all refer to
    // the same empty object

if (typeof Object.create !== 'function') {
     Object.create = function (o) {
         var F = function () {};
         F.prototype = o;
         return new F();
     };
}

// creating a new object with another as the prototype (in this case filled in)
var another_stooge = Object.create(stooge);

console.log("");
console.log(chalk.yellow("another_stooge:", JSON.stringify(another_stooge, null, 4)));
console.log("prototype:", Object.getPrototypeOf(another_stooge));

console.log("");
console.log(chalk.green("stooge:", JSON.stringify(stooge, null, 4)));
console.log("prototype:", Object.getPrototypeOf(stooge));


// same, although the objects are different 'shapes'
console.log(chalk.green("another_stooge.nickname === stooge.nickname : ", another_stooge.nickname === stooge.nickname));

console.log(chalk.green("another_stooge.nickname", another_stooge.nickname));
console.log(chalk.green("stooge.nickname", stooge.nickname));


stooge.nickname = "Jerry";

if (another_stooge.nickname === stooge.nickname) {
	colour = chalk.green;
} else {
	colour = chalk.red;
}

// still the same values b/c the child inherited the change (i.e. it didn't have its own copy)
console.log(colour("another_stooge.nickname === stooge.nickname : ", another_stooge.nickname === stooge.nickname));

console.log(colour("another_stooge.nickname", another_stooge.nickname));
console.log(colour("stooge.nickname", stooge.nickname));

another_stooge.nickname = "Les";

if (another_stooge.nickname === stooge.nickname) {
	colour = chalk.green;
} else {
	colour = chalk.red;
}

// oh no! now it has its own copy! (hasOwnProperty)
console.log(colour("another_stooge.nickname === stooge.nickname : ", another_stooge.nickname === stooge.nickname));

console.log(colour("another_stooge.nickname", another_stooge.nickname));
console.log(colour("stooge.nickname", stooge.nickname));


console.log("");
console.log(colour("another_stooge:", JSON.stringify(another_stooge, null, 4)));
console.log("prototype:", Object.getPrototypeOf(another_stooge));

console.log("");
console.log(colour("stooge:", JSON.stringify(stooge, null, 4)));
console.log("prototype:", Object.getPrototypeOf(stooge));

// create another child. Same as our prodigal son was but still 'the good sheep'
var third_stooge = Object.create(stooge);

console.log("");
console.log(colour("another_stooge:", JSON.stringify(another_stooge, null, 4)));
console.log("prototype:", Object.getPrototypeOf(another_stooge));

console.log("");
console.log(colour("stooge:", JSON.stringify(stooge, null, 4)));
console.log("prototype:", Object.getPrototypeOf(stooge));

console.log("");
console.log(colour("third_stooge:", JSON.stringify(third_stooge, null, 4)));
console.log("prototype:", Object.getPrototypeOf(third_stooge));

console.log("");

// 'for in ' flattens the hierarchy unless you use 'hasOwn'
var name;
for (name in another_stooge) {
    if (typeof another_stooge[name] !== 'function') {
        console.log(name + ': ' + another_stooge[name]);
    }
}

console.log("");

for (name in stooge) {
    if (typeof stooge[name] !== 'function') {
        console.log(name + ': ' + stooge[name]);
    }
}

// the shadowing is complete unless you explicitly get the prototype object & iterate over that too

// 'for in ' flattens the hierarchy unless you use 'hasOwn'
var name;
for (name in another_stooge) {
    if (typeof another_stooge[name] !== 'function') {
        console.log(name + ': ' + another_stooge[name]);
    }
}
for (name in another_stooge.prototype) {
    if (typeof another_stooge.prototype[name] !== 'function') {
        console.log(name + ': ' + another_stooge.prototype[name]);
    }
}

// TODO - make a 'listnames' one
function listAllProperties(o){     
	var objectToInspect;     
	var result = [];
	
	for(objectToInspect = o; objectToInspect !== null; objectToInspect = Object.getPrototypeOf(objectToInspect)){  
		result = result.concat(Object.getOwnPropertyNames(objectToInspect));  
	}
	
	return result; 
}
console.log("");
console.log(listAllProperties(stooge));
console.log("");
console.log(listAllProperties(another_stooge));
console.log("");
console.log(listAllProperties(third_stooge));

// TODO how would we detect shadowing/duplicates?


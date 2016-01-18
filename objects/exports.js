var weekDay = {};
(function(exports) {
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
               "Thursday", "Friday", "Saturday"];

  exports.name = function(number) {
    return names[number];
  };
  exports.number = function(name) {
    return names.indexOf(name);
  };
})(weekDay);

var weekFunc = function() {
  var exports = {};
  var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
               "Thursday", "Friday", "Saturday"];

  exports.name = function(number) {
    return names[number];
  };
  exports.number = function(name) {
    return names.indexOf(name);
  };

  return exports;
}();

console.log("weekDay = ", weekDay.name(weekDay.number("Saturday")));
console.log("weekFunc = ", weekFunc.name(weekFunc.number("Saturday")));
console.log("weekFunc == weekDay, apparently! ");
var hash_row = "";
var size = 7;

for (var j = 0; j < size/2; j++) {
  hash_row += "# ";
}

for(var i = 0; i < size; i++) {
  if (i % 2 === 0) {
    console.log(' ' + hash_row);
  }
  else 
    console.log(hash_row);
}


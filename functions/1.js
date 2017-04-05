function tre (a) {
  var br = "\n";
  var result = "";
  
  for (var star = "#"; star.length <= a; star += "#") {
    result = result + br + star;
  }
  
  return result;
}
console.log( tre(7) );
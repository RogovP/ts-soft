function triangle (kolStr) {
  var br = "\n";
  var result = "";
  
  for (var star = "#"; star.length <= kolStr; star += "#") {
    result = result + br + star;
  }
  
  return result;
}
console.log( triangle(7) );

function range(a, b) {
  var mas = [];

  for (a; a < b + 1; a++) { 
        mas.push(a); 
    }
    
    return mas;
}
console.log( range(2, 5) );
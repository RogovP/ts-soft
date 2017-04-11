function scoreTest(mas, bTrue, bNull, bFalse) {
  var sum = 0;
  
  for (var i = 0; i < mas.length; i++) {
    if (mas[i] === 0) {
      sum += bTrue;
    }
    
    else if (mas[i] === 1 ) {
      
      if (Math.sign (bNull) === -1) {
        sum += bNull;
      } else {
        sum += bNull;
      }
      
    }
    
    if(mas[i] === 2) {
      sum -= bFalse;
    }
    
  }
  
  return sum;
}

console.log( scoreTest([0, 0, 0, 0, 2, 1, 0], 2, 0, 1) ); //9
console.log( scoreTest([0, 1, 0, 0, 2, 1, 0, 2, 2, 1], 3, -1, 2) );

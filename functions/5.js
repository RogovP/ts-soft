function flatten(arrays) {
  
return arrays.reduce(function (s, i) {
  
    return s.concat(i);
});
  
}
console.log( flatten( [[1, 2, 3], [4, 5], [6]] ) );
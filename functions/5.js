var arrays = [[1, 2, 3], [4, 5], [6]];
var result = arrays.reduce(function (s, i) {
    return s.concat(i);
});
console.log(result);
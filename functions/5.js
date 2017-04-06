function flatten(arrays) {
  
return arrays.reduce(function (s, i) {
  // с помощью callback функции метода reduce "склеиваем" промежуточный результат с текущим значением
    return s.concat(i);
});
  
}
console.log( flatten( [[1, 2, 3], [4, 5], [6]] ) );

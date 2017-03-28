function range(a, b) {
  var c = [];
  for (a; a < b + 1; a++) {
        c.push(a);
    }
    return c;
}
console.log(range(2, 5));
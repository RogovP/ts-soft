function Vector(x, y) {
  this.x = x;
  this.y = y;
}
Vector.prototype.plus = function (z) {
    var x = this.x + z.x;
    var y = this.y + z.y;
  console.log("Vector{x: " + x + ", " + "y:" + y + "}");
}
Vector.prototype.minus = function (z) {
    var x = this.x - z.x;
    var y = this.y - z.y;
  console.log("Vector{x: " + x + ", " + "y:" + y + "}");
}
new Vector(1, 2).plus(new Vector(2, 3));
new Vector(1, 2).minus(new Vector(2, 3));
// не понял задание по поводу геттера,что он должен выводить
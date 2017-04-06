function Vector(x, y) { 
  this.x = x;
  this.y = y;
}

Vector.prototype.plus = function (some) {
    var x = this.x + some.x; 
    var y = this.y + some.y;
  return ("Vector{x: " + x + ", " + "y:" + y + "}");
}

Vector.prototype.minus = function (some) {
    var x = this.x - some.x;
    var y = this.y - some.y;
  return ("Vector{x: " + x + ", " + "y:" + y + "}");
}

Vector.prototype.__defineGetter__ ("length", function() { //добавляем конструктору "Vector" геттер "length",который подсчитывает длину вектора
    return Math.sqrt( Math.pow(this.x, 2) + Math.pow(this.y, 2) );
  });
  
console.log( new Vector(1, 2).plus(new Vector(2, 3)) );
console.log( new Vector(1, 2).minus(new Vector(2, 3)) );
console.log( new Vector(3, 4).length );

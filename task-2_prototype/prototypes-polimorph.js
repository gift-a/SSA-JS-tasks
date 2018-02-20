"use strict";

function Square(side) {
  this._side = side || 0;
}
Square.prototype.setSide = function(length) {
  this._side = length;
};
Square.prototype.getSide = function() {
  return this._side;
};
Square.prototype.getPerimetr = function() {
  return this._side * 4;
};

// method redefinition
function Cub(side) {
  Square.call(this, side);
}
Cub.prototype = Object.create(Square.prototype);
Cub.prototype.constructor = Cub;
Cub.prototype.getPerimetr = function() {
  return this._side * 12;
};

// extension of the method
function Cub1(side) {
  Square.call(this, side);
}
Cub1.prototype = Object.create(Square);
Cub1.prototype.constructor = Cub1;
Cub1.prototype.getPerimetr = function() {
  return Square.prototype.getPerimetr.call(this) * 3;
};

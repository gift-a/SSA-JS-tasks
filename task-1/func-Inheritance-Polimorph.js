"use strict";

function Square(side) {
  this._side = side || 0;

  this.setSide = function(length) {
    this._side = length;
  };

  this.getSide = function() {
    return this._side;
  };

  this.getPerimetr = function() {
    return this._side * 4;
  };
}

// method redefinition
function Cub(side) {
  Square.call(this, side);
  this.getPerimetr = function() {
    return this._side * 12;
  };
}

// extension of the method
function Cub1(side) {
  Square.call(this, side);
  var oldGetPerimetr = this.getPerimetr;
  this.getPerimetr = function() {
    return oldGetPerimetr.call(this) * 3;
  };
}

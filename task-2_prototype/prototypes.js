"use strict";

function Figure() {
  this._center = {};
}
Figure.prototype.setCenter = function(x, y) {
  this._center.x = x;
  this._center.y = y;
};
Figure.prototype.centerToString = function() {
  return "{x: " + this._center.x + ", y: " + this._center.y + "}";
};

function Rectangle(diagonal) {
  Figure.call(this);
  this._diagonal = diagonal || 0;
}
Rectangle.prototype = Object.create(Figure.prototype);
Rectangle.prototype.constructor = Rectangle;
Rectangle.prototype.info = function() {
  console.log(
    "center: " + this.centerToString() + ", diagonal: " + this._diagonal
  );
};

function Circle(radius) {
  Figure.call(this);
  this._radius = radius || 0;
}
Circle.prototype = Object.create(Figure.prototype);
Circle.prototype.constructor = Circle;
Circle.prototype.info = function() {
  console.log("center: " + this.centerToString() + ", radius: " + this._radius);
};

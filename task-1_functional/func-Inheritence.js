"use strict";

function Figure() {
  this._centerX;
  this._centerY;
  this.setCenter = function(x, y) {
    this._centerX = x;
    this._centerY = y;
  };
  this.getCenter = function() {
    return "{x: " + this._centerX + ", y: " + this._centerY + "}";
  };
}

function Rectangle(diagonal) {
  Figure.call(this);
  this._diagonal = diagonal;
  this.info = function() {
    console.log(
      "center: " + this.getCenter() + ", diagonal: " + this._diagonal
    );
  };
}

function Circle(radius) {
  Figure.call(this);
  this._radius = radius;
  this.info = function() {
    console.log("center: " + this.getCenter() + ", radius: " + this._radius);
  };
}

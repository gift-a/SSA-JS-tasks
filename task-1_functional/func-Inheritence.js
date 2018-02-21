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
  this.info = function() {
    console.log("center: " + this.getCenter() + ", diagonal: " + diagonal);
  };
}

function Circle(radius) {
  Figure.call(this);
  this.info = function() {
    console.log("center: " + this.getCenter() + ", radius: " + radius);
  };
}

"use strict";

function Figure() {
  this._center = {};
  this.setCenter = function(x, y) {
    this._center.x = x;
    this._center.y = y;
  };
  this.getCenter = function() {
    return "{x: " + this._center.x + ", y: " + this._center.y + "}";
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

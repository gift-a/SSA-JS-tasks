"use strict";

function Figure() {
  var center = {};
  this.setCenter = function(x, y) {
    center.x = x;
    center.y = y;
  };
  this.getCenter = function() {
    return "{x: " + center.x + ", y: " + center.y + "}";
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

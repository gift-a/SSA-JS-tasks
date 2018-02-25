"use strict";

function random(min, max, delay, callback) {
  var data, error;
  if (max < min) {
    error = new RangeError("min >= max");
  } else data = Math.round(Math.random() * (max - min) + min);

  setTimeout(callback, delay, error, data);
}

function callback(error, data) {
  if (error) {
    console.error(error.message);
  } else console.log(data);
}

random(1, 100, 2000, callback);
random(1000, 100, 3000, callback);

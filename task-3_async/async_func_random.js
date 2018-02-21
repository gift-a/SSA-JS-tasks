"use strict";

function random(min, max, delay, callback) {
  var data;
  if (max < min) {
    var error = new RangeError("min >= max");
  } else var data = Math.random() * (max - min) + min;

  setTimeout(callback, delay, error, data);
}

random(1, 100, 2000, function(error, data) {
  if (error) {
    console.error(error.message);
  } else console.log(data);
});
random(1000, 100, 3000, function(error, data) {
  if (error) {
    console.error(error.message);
  } else console.log(data);
});

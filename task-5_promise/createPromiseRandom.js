"use strict";

function createPromiseRandom(min, max, delay) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      if (max <= min) reject(new RangeError("min >= max"));
      else resolve(Math.round(Math.random() * (max - min) + min));
    }, delay);
  });
}

let p1 = createPromiseRandom(1, 100, 2000);
p1.then(data => console.log(data), error => console.log(error));

let p2 = createPromiseRandom(1000, 100, 3000);
p2.then(data => console.log(data), error => console.log(error));

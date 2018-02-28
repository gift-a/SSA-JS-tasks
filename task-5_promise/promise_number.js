"use strict";

new Promise(function(resolve, reject) {
  // Запрашиваем у пользователя число number при помощи prompt()
  let number = +prompt("type number");
  // Если пользователь ввел не число - вызвать reject()
  // Если пользователь ввел число - вызвать resolve(number)
  !number ? reject(new TypeError("not a number")) : resolve(number);
})
  .catch(function(error) {
    return new Promise(function(resolve, reject) {
      console.error(error);
      let number;
      // Запрашиваем у пользователя число number, пока он его не введет
      do {
        number = +prompt("type number");
      } while (!number);
      // После ввода числа - вызвать resolve(number)
      resolve(number);
    });
  })
  .then(function(result) {
    console.log(result);
  });

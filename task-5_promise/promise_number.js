"use strict";

new Promise(function(resolve, reject) {
  // Запрашиваем у пользователя число number при помощи prompt()
  let number = prompt("type number");
  // Если пользователь ввел не число - вызвать reject()
  // Если пользователь ввел число - вызвать resolve(number)
  if (!number || Number.isNaN(+number)) {
    reject(new TypeError("not a number"));
  } else resolve(+number);
})
  .catch(function(error) {
    return new Promise(function(resolve, reject) {
      console.error(error);
      let number;
      // Запрашиваем у пользователя число number, пока он его не введет
      do {
        number = prompt("type number");
      } while (!number || Number.isNaN(+number));
      // После ввода числа - вызвать resolve(number)
      resolve(number);
    });
  })
  .then(function(result) {
    console.log(result);
  });

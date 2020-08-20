// Задача 2 - 1
// Использование for
// Напиши функцию getItemsString(array),
//   которая получает массив и возвращает строку,
//   полученную из объединения(конкатенации) строк в формате ${ номер элемента } - ${ значение элемента } \n,
//     где \n - спецсимвол переноса.

// Нумерация должна начинаться с 1.
// К примеру для первого элемента массива['Mango', 'Poly', 'Ajax'] с индексом 0 будет выведено '1 - Mango',
//   а для индекса 2 выведет '3 - Ajax'.

// Используйте вспомогательную переменную result для добавления(конкатенации) строк внутри цикла for

// const getItemsString = function (array) {
//   let result = '';

//   for (let i = 0; i < array.length; i += 1) {
//     result += `${i + 1} - ${array[i]}\n`;
//   }

//   return result;
// };

// console.log(getItemsString(['Mango', 'Poly', 'Ajax', 'Lux', 'Jay', 'Kong']));
// console.log(getItemsString([5, 10, 15]));

// // ---------------------------------start of second task-------------

// const calculateEngravingPrice = (message = '', pricePerWord = 0) => {
//   let countWords = message.split(' ').length;
//   console.log(countWords);
//   pricePerWord = countWords * pricePerWord;
//   return pricePerWord;
// };

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     10,
//   ),
// ); // 80

// console.log(
//   calculateEngravingPrice(
//     'Proin sociis natoque et magnis parturient montes mus',
//     20,
//   ),
// ); // 160

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 40),
// ); // 240

// console.log(
//   calculateEngravingPrice('Donec orci lectus aliquam est magnis', 20),
// ); // 120

// console.log(calculateEngravingPrice('Uno', 100)); // 100

// //--------------------------------end of second task;------------------------

// function findLongestWord(string = '') {
//   let argument = string.split(' ');
//   let longestWord = argument[0];

//   for (const arg of argument) {
//     if (arg.length > longestWord.length) {
//       longestWord = arg;
//     }
//   }
//   return longestWord;
// }

// console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// ('jumped');

// console.log(findLongestWord('Google do a roll'));
// ('Google');

// console.log(findLongestWord('May the force be with you'));
// ('force');

//------------------------start of fourth task---------------------

// function formatString(string, maxLength = 40) {
//   let normalizedStringLength = '';
//   let lengthString = string.length;

//   if (lengthString >= maxLength) {
//     normalizedStringLength = string.slice(0, maxLength).concat('...');
//   } else {
//     normalizedStringLength = string;
//   }

//   return normalizedStringLength;
// }

// console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
// console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
// console.log(
//   formatString('Vestibulum facilisis, purus nec pulvinar iaculis.', 30),
// );

// --------------start of fifth task-----

// function checkForSpam(str) {
//   let string = str.toLowerCase();
//   return string.includes('spam') || string.includes('sale') ? true : false;
// }
// console.log(checkForSpam('Latest technology news')); // false

// console.log(checkForSpam('JavaScript weekly newsletter')); // false

// console.log(checkForSpam('Get best sale offers now!')); // true

// console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// ---------------------start of sixth task------

// function mapArray(array) {
//   const numbers = new Array(array.length);

//   for (let i = 0; i < array.length; i += 1) {
//     numbers.push(array[i] * 10);
//   }
//   return numbers;
// }

// console.log(mapArray([-2, 0, 2]));
// // [-20, 0, 20]

// console.log(mapArray([-2.5, 0, 2.5]));
// // [-25, 0, 25]

// ----------------------------316523-----------------------------------

// function filterArray(array) {
//   const numbers = [];
//   for (let i = 0; i < array.length; i += 1) {
//     if (Number.isFinite(array[i])) {
//       numbers.push(array[i]);
//     }
//   }
//   return numbers;
// }

// console.log(filterArray([-2, 0, 2]));
// // [-2, 0, 2]

// console.log(filterArray([1, NaN, Infinity]));
// // [1]

// console.log(filterArray([0, -0, 100, '100']));
// // [0, 0, 100]

// console.log(filterArray([undefined, false, null, [], 1]));
// // [1]

// console.log(filterArray([{}, () => {}, 2]));
// // [2]

// ---------------------------------------c/cznv.xzcnv;l';xc----------------------

// function reduceArray(array) {
//   'use strict';
//   let total = 0;
//   for (let i = 0; i < array.length; i += 1) {
//     total += array[i];
//   }
//   return total;
// }

// console.log(reduceArray([]));
// // 6

// console.log(reduceArray([-2, 0, 2]));
// // 0

// console.log(reduceArray([1, 2, 2.5]));
// // 5.5

// ----------------------------klkgjhgfd;lkg;jfdgkfd---------------------------------

function isLoginValid(login, min = 4, max = 16) {
  return login.length >= min && login.length <= max ? true : false;
}

// console.log(isLoginValid();
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

function isLoginUnique(allLogins, login) {
  if (allLogins.includes(login)) {
    return false;
  } else {
    return true;
  }
}

function addLogin(allLogins, login) {
  const SUCCESS = 'Логин успешно добавлен!';
  const REFUSAL = 'Такой логин уже используется!';
  const ERROR = 'Ошибка! Логин должен быть размером от 4 до 16 символов';
  let message;

  if (isLoginValid(login) === false) {
    message = ERROR;
  } else if (isLoginUnique(allLogins, login) === false) {
    message = REFUSAL;
  } else if (isLoginUnique(allLogins, login) === true) {
    allLogins.push(login);
    message = SUCCESS;
  }

  return message;
}

console.log(addLogin(logins, 'Ajax'));

// 'Логин успешно добавлен!'

console.log(addLogin(logins, 'robotGoogles'));
// 'Такой логин уже используется!'

console.log(addLogin(logins, 'Zod'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

console.log(addLogin(logins, 'jqueryisextremelyfast'));
// 'Ошибка! Логин должен быть от 4 до 16 символов'

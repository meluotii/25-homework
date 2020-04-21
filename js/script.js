//Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

// function value(number1, number2) {
//     if (number1 == number2) {
//         return 0;
//     } else {
//         return number1 < number2 ? -1 : 1;
//     }
// }
// console.log(value(10, 30));


//Написать функцию, которая вычисляет факториал переданного ей числа.

// function factorial(number) {
//     return (number != 1) ? number * factorial(number - 1) : 1;
// }
// console.log(factorial(4));


//Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

// function getNumber(digit1, digit2, digit3) {

//     return '' + digit1 + digit2 + digit3
// }
// console.log(getNumber(1, 2, 3));

//Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

// function calcSquare(length, width) {
//     if (!length) {
//         return width * width;
//     } else if (!width) {
//         return length * length;
//     } else {
//         return length * width;
//     }
// }
// console.log(calcSquare(null, 5))


//Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.

// function isPerfect(num) {
//     let sum = 0;
//     for (let i = 1; i < num; i++) {
//         if (!(num % i)) {
//             sum += i;
//         }
//     }
//     return num === sum ? true : false;
// }
// console.log(isPerfect(6))


//Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.

// function isPerfect(num) {
//     let sum = 0;
//     for (let i = 1; i < num; i++) {
//         if (!(num % i)) {
//             sum += i;
//         }
//     }
//     return num === sum ? true : false;
// }

// function getNumbers(minRange, maxRange) {
//     for (let i = minRange; i <= maxRange; i++) {
//         if (isPerfect(i)) console.log(i);
//     }
// }
// getNumbers(1, 1000);


//Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

// function setTime(h) {
//     return function setMinutes(m = '00') {
//         return function setSeconds(s = '00') {
//             return `${h}:${m}:${s}`
//         }
//     }
// }

// let time = setTime(15)(10)(14);
// console.log(time);


//Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

// function setTime(h) {
//     return function setMinutes(m = '00') {
//         return function setSeconds(s = '00') {
//             return (h * 3600) + (m * 60) + s;
//         }
//     }
// }

// let time = setTime(10)(20)(30);
// console.log(time);


//Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

// function setTime(s) {
//     let hours = Math.floor(s / 3600);
//     s %= 3600;
//     let minutes = Math.floor(s / 60);
//     let seconds = s % 60;
//     return `${hours}:${minutes}:${seconds}`;
// }
// console.log(setTime(56000));


//Написать функцию, которая считает разницу между датами. Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс». При выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды, узнайте разницу в секундах, а потом разницу переведите обратно в «чч:мм:сс»

// function setTimeHours(h) {
//     return function setMinutes(m = '00') {
//         return function setSeconds(s = '00') {
//             return (h * 3600) + (m * 60) + s;
//         }
//     }
// }

// function setTimeSeconds(s) {
//     let hours = Math.floor(s / 3600);
//     s %= 3600;
//     let minutes = Math.floor(s / 60);
//     let seconds = s % 60;
//     return `${hours}:${minutes}:${seconds}`;
// }

// function getTimeDifference(firstHours, firstMinutes, firstSeconds, secondHours, secondMinutes, secondSeconds) {
//     let difference = setTimeHours(firstHours)(firstMinutes)(firstSeconds) - setTimeHours(secondHours)(secondMinutes)(secondSeconds);
//     if (difference < 0) {
//         console.error('Enter correct times')
//     } else {
//         return setTimeSeconds(difference);
//     }

// }
// console.log(getTimeDifference(5, 35, 40, 3, 40, 20));
// // 1 task
// function min(a, b) {
//     if (a > b) {
//         return b;
//     } else {
//         return a;
//     }
// }

// console.log(min(5, 1));





// // 2 task
// function parity(number) {
//     return number % 2 === 0;
// }

// console.log(parity(7));





// // 3 task

// // Функция, которая выводит квадрат числа в консоль:

// function printSquare(number) {
//     const square = number ** 2;
//     console.log(square);
// }

// const number = 5;
// printSquare(number);

// // Функция, которая возвращает квадрат числа:

// function returnSquare(number) {
//     const square = number ** 2;
//     return square;
// }

// const number = 5;
// const result = returnSquare(number);
// console.log(result);




// // 4 task

// function ageUser() {

//     const age = parseInt(prompt("Сколько вам лет?"));

//     if (isNaN(age)) {
//         console.log("Вы ввели неправильное значение");
//     } else {

//         if (age < 0) {
//             console.log("Вы ввели неправильное значение");
//         } else if (age <= 12) {
//             console.log("Привет, друг!");
//         } else {
//             console.log("Добро пожаловать!");
//         }
//     }
// }

// ageUser();





// // 5 task

// function twoNumbers(num1, num2) {

//     if (typeof num1 !== 'number' || typeof num2 !== 'number' || isNaN(num1) || isNaN(num2)) {
//         return 'Одно или оба значения не являются числом';
//     } else {
//         return num1 * num2;
//     }
// }

// console.log(twoNumbers("5", 10));





// // 6 task

// function numberRequest() {
//     const num = prompt("Введите число");
//     if (isNaN(num)) {
//         return 'Переданный параметр не является числом';
//     } else {
//         const cube = num ** 3;
//         return `${num} в кубе равняется ${cube}`;
//     }
// }

// console.log(numberRequest());





// // 7 task

// const getArea = function() {
//     return Math.PI * this.radius ** 2;
// };

// const getPerimeter = function() {
//     return 2 * Math.PI * this.radius;
// };

// const circle1 = {
//     radius: 5,
//     getArea: getArea,
//     getPerimeter: getPerimeter
// };

// const circle2 = {
//     radius: 7,
//     getArea: getArea,
//     getPerimeter: getPerimeter
// };

// console.log("Площадь circle1:", circle1.getArea());
// console.log("Периметр circle1:", circle1.getPerimeter());

// console.log("Площадь circle2:", circle2.getArea());
// console.log("Периметр circle2:", circle2.getPerimeter());

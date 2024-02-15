

// 1 task
let a = 10;
alert(a);
a = 20;
alert(a);

// 2 task
const yearFirstIPhone = 2007;
alert(`Первый iPhone вышел в ${yearFirstIPhone} году.`);

// 3 task
const name = "Брендан Эйх";
alert(`Создателя JavaScript зовут ${name}.`);

// 4 task
let x = 10;
let y = 2;
alert(`Сумма: ${x + y}, Разность: ${x - y}, Произведение: ${x * y}, Частное: ${x / 2}`);

// 5 task
let result = 2 ** 5;
alert(`2 в 5-й степени равно: ${result} `);

// 6 task
let a = 9;
let b = 2;
alert(`Остаток от деления 9 на 2 = ${a % b}`);

// 7 task
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

// 8 task
let age = prompt("Сколько вам лет?");
alert(age);

// 9.0 task
let user = {
    name: 'Dmitry',
    age: 26,
    isAdmin: true
};

// 9.1 task
user[`city of residence`] = "Stavropol";

// 9.2 task
user.age = 30;

// 9.3 task
delete user[`city of residence`];

//9.4 task
let info = prompt("Какую информацию хотите узнать о пользователе?");
alert(user[info]);

// 10 task
let username = prompt(`Введите ваше имя: `);
alert(`Привет, ${username}!`);
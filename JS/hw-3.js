// 1 task

let Password = 'Qwerty';
let userPassword = prompt('Введите пароль:');

if (userPassword === Password) {
    alert('Пароль введен верно');
} else {
    alert('Пароль введен неправильно');
}





// 2 task

let c = '2';

if (c > 0 && c < 10) {
    console.log('Верно');
} else {
    console.log('Неверно');
}







// 3 task

let d = 456;
let e = 101;

if (d > 100 || e > 100) {
    console.log('Верно');
} else {
    console.log('Неверно');
}







// 4 task

let a = '2';
let b = '3';

alert(parseInt(a) + parseInt(b));









// 5 task

let monthNumber = prompt('Введите номер месяца');

switch (monthNumber) {
    case '1':ч
        console.log('Январь');
        break;
    case '2':
        console.log('Февраль');
        break;
    case '3':
        console.log('Март');
        break;
    case '4':
        console.log('Апрель');
        break;
    case '5':
        console.log('Май');
        break;
    case '6':
        console.log('Июнь');
        break;
    case '7':
        console.log('Июль');
        break;
    case '8':
        console.log('Август');
        break;
    case '9':
        console.log('Сентябрь');
        break;
    case '10':
        console.log('Октябрь');
        break;
    case '11':
        console.log('Ноябрь');
        break;
    case '12':
        console.log('Декабрь');
        break;

    default:
        console.log('Такого месяца нет');
        break;
}

// 7 task

let userInput = prompt("Пожалуйста, введите любое число");

if (!isNaN(userInput)) {
    let number = parseFloat(userInput);
    
    if (number % 2 === 0) {
        alert("Число четное");
    } else {
        alert("Число нечетное");
    }
} else {
    alert("Вы ввели не число!");
}



// // 8 task

// let clientOS = 0;

// if (clientOS === 0) {
//     console.log("Установите версию приложения для iOS по ссылке");
// } else if (clientOS === 1) {
//     console.log("Установите версию приложения для Android по ссылке");
// } else {
//     console.log("Неизвестная операционная система");
// }





// 9 task

let clientOS = 0;
let clientDeviceYear = 2015;
let message = "";

if (clientDeviceYear < 2015) {
    message = "облегчённую";
}

if (clientOS === 0) {
    console.log(`Установите ${message}версию приложения для iOS по ссылке`);
} else if (clientOS === 1) {
    console.log(`Установите ${message} версию приложения для Android по ссылке`);
} else {
    console.log('Неизвестная операционная система');
}
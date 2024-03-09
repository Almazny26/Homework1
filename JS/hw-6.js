// 1 task

const num = [1, 5, 4, 10, 0, 3];

for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
    if (num[i] === 10) {
        break;
    }
}





// 2 task

const numTwo = [1, 5, 4, 10, 0, 3];
console.log(numTwo.indexOf(4));





// 3 task

let numThree = [1, 3, 5, 10, 20];

numThree = numThree.join(' ');
console.log(numThree);





// 4 task

let numFour = [];

for (let i = 0; i < 3; i++) {
    let row = [];
    for (let j = 0; j < 3; j++) {
        row.push(1);
    }
    numFour.push(row);
}
console.log(numFour);





// 5 task

let numFive = [1, 1, 1,];

numFive.push(2, 2, 2);
console.log(numFive);





// 6 task

let numSix = [9, 8, 7, 'a', 6, 5];

numSix.sort((a, b) => a - b);
numSix = numSix.filter(item => item !== 'a');
console.log(numSix);





// 7 task

let numSeven = [9, 8, 7, 6, 5];

let userInput = prompt("Угадайте число:");
if (numSeven.includes(parseInt(userInput))) {
    alert("Угадал");
} else {
    alert("Не угадал");
}





// 8 task

let txtEight = 'abcdef';

let arr = txtEight.split('');
arr.reverse();
let reversedStr = arr.join('');
console.log(reversedStr);





// 9 task

let numNine = [[1, 2, 3], [4, 5, 6]];

let flattenedArr = [].concat(...numNine);

console.log(flattenedArr);





// 10 task

let numTen = [3, 8, 2, 6, 7, 1, 5, 9, 4, 10];

for (let i = 0; i < numTen.length - 1; i++) {
    let sum = numTen[i] + numTen[i + 1];
    console.log(`Сумма элементов ${numTen[i]} и ${numTen[i + 1]} равна ${sum}`);
}





// 11 task

function squareArray(arr) {
    const squaredArray = arr.map(num => num * num);
    return squaredArray;
}
const inputArray = [1, 2, 3, 4, 5];
const resultArray = squareArray(inputArray);
console.log(resultArray);





// 12 task

function wordLengthsArray(arr) {
    const lengthsArray = arr.map(word => word.length);
    return lengthsArray;
}
const inputArray = ["apple", "banana", "orange", "grape"];
const resultArray = wordLengthsArray(inputArray);
console.log(resultArray);





// 13 task

function negativeNumbersArray(arr) {
    const negativeArray = arr.filter(num => num < 0);
    return negativeArray;
}
const inputArray = [1, -2, 3, -4, 5];
const resultArray = negativeNumbersArray(inputArray);
console.log(resultArray);





// 14 task

const originalArray = [];
for (let i = 0; i < 10; i++) {
    originalArray.push(Math.floor(Math.random() * 11));
}
console.log("Исходный массив:", originalArray);
const evenArray = originalArray.filter(num => num % 2 === 0);
console.log("Массив с четными значениями:", evenArray);





// 15 task

const array = [];
for (let i = 0; i < 6; i++) {
    array.push(Math.floor(Math.random() * 10) + 1);
}
console.log("Массив:", array);
const sum = array.reduce((acc, curr) => acc + curr, 0);
const average = sum / array.length;
console.log("Среднее арифметическое:", average);












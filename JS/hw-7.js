// 1 task

let text = 'js';
console.log(text.toUpperCase());





// 2 task

function filterStringsByPrefix(stringArray, prefix) {
    prefix = prefix.toLowerCase();
    let filteredArray = [];
    for (let i = 0; i < stringArray.length; i++) {
        let lowerString = stringArray[i].toLowerCase();

        if (lowerString.startsWith(prefix)) {
            filteredArray.push(stringArray[i]);
        }
    }
    return filteredArray;
}

let arr = ["кошка", "собака", "Корова", "Николай", "машина"];
let prefix = "ко";
let result = filterStringsByPrefix(arr, prefix);
console.log(result);





// 3 task

let number = 32.58884;
let roundedDown = Math.floor(number);
let roundedUp = Math.ceil(number);
let roundedNearest = Math.round(number);

console.log('До меньшего целого:', roundedDown);
console.log('До большего целого:', roundedUp);
console.log('До ближайшего целого:', roundedNearest);





// 4 task

let numMaxMin = [52, 53, 49, 77, 21, 32];
let max = Math.max(...numMaxMin);
let min = Math.min(...numMaxMin);

console.log('Максимальное значение:', max);
console.log('Минимальное значение:', min);





// 5 task

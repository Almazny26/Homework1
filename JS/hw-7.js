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


// // 1 task

// const people = [
//     { name: 'Глеб', age: 29 },
//     { name: 'Анна', age: 17 },
//     { name: 'Олег', age: 7 },
//     { name: 'Оксана', age: 47 }
// ];

// function agePeople(people1, people2) {
//     return people1.age - people2.age;
// }

// console.log(people.sort(agePeople));




// 2 task

function isPositive(num) {
    return num > 0;

}
function isMale(person) {
    return person.gender === 'male';
}

function filter(arr, ruleFunction) {
    const filteredArray = [];

    for (let i = 0; i < arr.length; i++) {
        if (ruleFunction(arr[i])) {
            filteredArray.push(arr[i]);
        }
    }

    return filteredArray;
}

console.log(filter([3, -4, 1, 9], isPositive));

const people = [
    { name: 'Глеб', gender: 'male' },
    { name: 'Анна', gender: 'female' },
    { name: 'Олег', gender: 'male' },
    { name: 'Оксана', gender: 'female' }
];

console.log(filter(people, isMale));
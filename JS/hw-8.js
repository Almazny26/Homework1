// 1 task

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

function agePeople(people1, people2) {
    return people1.age - people2.age;
}

console.log(people.sort(agePeople));
1 task

for (let index = 1; index <= 2; index++) {
    console.log("Привет");
    console.log(index);


}





// 2 task

for (let index = 1; index < 6; index++) {
    if (index % 2 == 0){
        continue
    }
    console.log(index);
}





// 3 task

let i = 7;

while (i < 23) {
    console.log(i);
    i++;
}






// 4 task

const obj = {
    "Коля": '200',
    "Вася": '300',
    "Петя": '400'
};

for (let key in obj) {
    console.log(`${key} — зарплата ${obj[key]} долларов`);
}






// 5 task

let n = 1000;
let num = 0;

while (n >= 50) {
    n /= 2;
    num++;
}

console.log("Число:", n);
console.log("Количество итераций:", num);






// 6 task

const firstFriday = 2; // В большинстве стран пятница - 5-й день недели

for (let day = firstFriday; day <= 31; day += 7) {
    console.log(`Сегодня пятница, ${day}-е число. Необходимо подготовить отчет.`);
}


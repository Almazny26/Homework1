function getSeason() {
    let month = prompt('Введите номер месяца (от 1 до 12) и вы узнаете к какому времени года он относится');

    if (month >= 3 && month <= 5) {
        alert('Весна');
    } else if (month >= 6 && month <= 8) {
        alert('Лето');
    } else if (month >= 9 && month <= 11) {
        alert('Осень');
    } else if (month == 12 || month == 1 || month == 2) {
        alert('Зима');
    } else if (month < 1 || month > 12){
        alert('Ошибка!');
    } else {
        alert ('Ошибка!!!');
    }
}



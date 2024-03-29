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
    } else if (month < 1 || month > 12) {
        alert('Ошибка!');
    } else {
        alert('Ошибка!!!');
    }
}


function memorization() {
    const wordsToRemember = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];

    alert('Прочитай и запомни данные слова:\n\nЯблоко, Груша, Дыня, Виноград, Персик, Апельсин, Мандарин\n\nЕсли запомнил нажимай OK');

    let checkingWords = prompt('А теперь напряги память и напиши, что запомнил(а) через пробел');

    if (checkingWords === null || checkingWords.trim() === '') {
        alert('Ты не ввел(а) ни одного слова. Попробуй еще раз!');
        return;
    }

    const userWords = new Set(checkingWords.toLowerCase().split(' '));

    const correctOrder = [...wordsToRemember].every(word => userWords.has(word.toLowerCase()));

    if (correctOrder) {
        alert('Молодец! Правильно! =)');
    } else {
        alert('Попробуй ещё раз =(');
    }
}
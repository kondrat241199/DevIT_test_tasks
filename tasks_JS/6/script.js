/*6. Є функція primitiveMultiply, яка перемножує числа, але випадковим чином може викидати винятки типу
 NotificationException, ErrorException. Задача - написати функцію-обгортку, яка буде повторювати обчислення при винятку 
 NotificationException, але припинятиме роботу при винятках ErrorException.*/

class NotificationException extends Error {
    constructor() {
        super('NotificationException'); // Конструктор для винятку повідомлення
    }
}

class ErrorException extends Error {
    constructor() {
        super('ErrorException'); // Конструктор для винятку помилки
    }
}

// Функція, яка виконує множення двох чисел з випадковими винятками
function primitiveMultiply(a, b) {
    const rand = Math.random();
    if (rand < 0.5) {
        return a * b; // Повернення результату множення
    } else if (rand > 0.85) {
        throw new ErrorException(); // Викид винятку помилки
    } else {
        throw new NotificationException(); // Викид винятку повідомлення
    }
}

// Функція, яка намагається виконати множення надійно
function reliableMultiply(a, b) {
    while (true) {
        try {
            return primitiveMultiply(a, b); // Спроба виконання множення
        } catch (error) {
            if (error instanceof ErrorException) {
                // Якщо отримано виняток помилки, завершити цикл
                break;
            } else if (error instanceof NotificationException) {
                // Якщо отримано виняток повідомлення, продовжити цикл
                continue;
            } else {
                // Якщо отримано інший виняток, викинути його далі
                throw error;
            }
        }
    }
}

try {
    console.log(reliableMultiply(8, 8));
} catch (error) {
    if (error instanceof ErrorException) {
        console.error('Помилка: ErrorException');
    } else {
        console.error('Виникла невідома помилка:', error);
    }
}

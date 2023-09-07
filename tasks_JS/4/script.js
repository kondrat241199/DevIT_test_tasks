//4. Напишіть метод arrayToObject, який перетворює масив в об'єкт (використовуйте рекурсію).

// Створюємо функцію arrayToObject, яка приймає вхідний масив arr.
function arrayToObject(arr) {
    // Створюємо порожній об'єкт, в якому будемо зберігати результат.
    const result = {};

    // Перебираємо кожен підмасив item у вхідному масиві arr.
    for (const item of arr) {
        // Перший елемент item (item[0]) використовуємо як ключ для об'єкта.
        // Другий елемент item (item[1]) використовуємо як значення.
        if (Array.isArray(item[1])) {
            // Якщо другий елемент item є масивом, то це означає вкладений масив.
            // Викликаємо функцію arrayToObject рекурсивно для перетворення вкладеного масиву в об'єкт.
            result[item[0]] = arrayToObject(item[1]);
        } else {
            // Якщо другий елемент item не є масивом (звичайний ключ-значення),
            // то призначаємо його властивість result[item[0]].
            result[item[0]] = item[1];
        }
    }

    // Повертаємо отриманий об'єкт.
    return result;
}

// Вхідний масив arr з вкладеними масивами.
var arr = [['name', 'developer'], ['age', 5], ['skills', [['html', 4], ['css', 5], ['js', 5]]]];

// Викликаємо функцію arrayToObject і отримуємо результат в об'єкті obj.
var obj = arrayToObject(arr);

// Виводимо отриманий об'єкт obj в консоль.
console.log(obj);

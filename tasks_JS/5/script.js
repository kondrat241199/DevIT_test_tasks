//5.Напишіть обернену функцію (див. завдання 4) objectToArray, яка з об'єкта створює масив.

function objectToArray(obj) {
    // Створюємо порожній масив, в якому будемо зберігати пари ключ-значення.
    const result = [];

    // Перебираємо всі ключі об'єкта за допомогою циклу for...in.
    for (const key in obj) {
        // Перевіряємо, чи ключ в об'єкті є власною властивістю об'єкта (а не успадкованою).
        if (obj.hasOwnProperty(key)) {
            // Якщо значення ключа є об'єктом, викликаємо функцію objectToArray рекурсивно для перетворення вкладеного об'єкта в масив.
            if (typeof obj[key] === 'object') {
                result.push([key, objectToArray(obj[key])]);
            } else {
                // Інакше, просто додаємо пару ключ-значення до масиву.
                result.push([key, obj[key]]);
            }
        }
    }

    // Повертаємо отриманий масив.
    return result;
}

// Об'єкт для перетворення в масив.
var obj = {
    name: 'developer',
    age: 5,
    skills: {
        html: 4,
        css: 5,
        js: 5
    }
};

// Викликаємо функцію objectToArray і отримуємо результат в масиві arr.
var arr = objectToArray(obj);

// Виводимо отриманий масив arr в консоль.
console.log(arr);
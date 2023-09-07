//Завдання. Напишіть функцію deepEqual для перевірки двух об'єктів на ідентичність



//Рішення завдання 

//Варіант 1 (за умовою якщо порядок переданих значень в об'єктах буде однаковим якщо буде різним поверне false)
// Функція deepEqual приймає два об'єкти для порівняння.
function deepEqual(object1, object2) {
    // Використовуємо JSON.stringify для перетворення об'єкта 1 в рядок JSON.
    // Потім порівнюємо цей рядок з рядком JSON, отриманим з об'єкта 2.
    // Якщо обидва рядки ідентичні, повертаємо true (об'єкти глибоко рівні).
    return JSON.stringify(object1) === JSON.stringify(object2);
}


//Варіант 2 
function deepEqual(obj1, obj2) {
    // Перевірка на строгої рівності об'єктів. Якщо вони однакові, повертаємо true.
    if (obj1 === obj2) {
        return true;
    }

    // Перевірка, чи об'єкти не є null і чи є обидва об'єкти дійсно об'єктами.
    if (obj1 == null || typeof obj1 != "object" || obj2 == null || typeof obj2 != "object") {
        return false;
    }

    // Отримання ключів першого і другого об'єкта для подальшого порівняння.
    let keysObj1 = Object.keys(obj1);
    let keysObj2 = Object.keys(obj2);

    // Перевірка, чи об'єкти мають однакову кількість ключів.
    if (keysObj1.length != keysObj2.length) {
        return false;
    }

    // Перебір ключів першого об'єкта.
    for (let key of keysObj1) {
        // Перевірка, чи ключ з першого об'єкта є в другому об'єкті
        // та рекурсивне порівняння відповідних значень.
        if (!keysObj2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }

    // Якщо всі перевірки пройдені, повертаємо true.
    return true;
}



//Перевірка на працездатнісь відносно завданню
console.log(deepEqual({ name: 'test', age: 10 }, { name: 'test', age: 10 }))//true
console.log(deepEqual({ name: 'test', age: 10 }, { age: 10, name: 'test' })); // output true(false по першому варіанту рішення)
console.log(deepEqual({ name: 'test', func: () => { } }, { name: 'test' })); // output false
console.log(deepEqual({ name: 'test', value: undefined }, { name: 'test' })); // output false
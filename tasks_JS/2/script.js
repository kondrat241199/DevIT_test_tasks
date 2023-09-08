/*2. Напишіть функцію-генератор chunkArray, яка повертає ітератор, що повертає частини масиву заданої довжини.*/

// Функція-генератор, яка розбиває масив на частини заданої довжини та повертає ітератор.
function* chunkArray(arr, chunkSize) {
    // Проходимо масив в циклі, з кроком chunkSize.
    for (let i = 0; i < arr.length; i += chunkSize) {
        // За допомогою slice створюємо новий підмасив з потрібною кількістю елементів.
        yield arr.slice(i, i + chunkSize);
    }
}

// Приклад 1: Розбиваємо масив чисел на частини по 2 елементи.
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const iterator1 = chunkArray(numbers, 2);

console.log("Приклад 1:");
for (const chunk of iterator1) {
    console.log(chunk);
}
// Вивід:
// [1, 2]
// [3, 4]
// [5, 6]
// [7, 8]
// [9]

// Приклад 2: Розбиваємо масив рядків на частини по 3 елементи.
const words = ["apple", "banana", "cherry", "date", "elderberry", "fig"];
const iterator2 = chunkArray(words, 3);

console.log("Приклад 2:");
for (const chunk of iterator2) {
    console.log(chunk);
}
// Вивід:
// [ 'apple', 'banana', 'cherry' ]
// [ 'date', 'elderberry', 'fig' ]

// Приклад 3: Розбиваємо масив на частини по 1 елементу (кожен елемент окремо).
const letters = ["a", "b", "c", "d", "e"];
const iterator3 = chunkArray(letters, 1);

console.log("Приклад 3:");
for (const chunk of iterator3) {
    console.log(chunk);
}
  // Вивід:
  // [ 'a' ]
  // [ 'b' ]
  // [ 'c' ]
  // [ 'd' ]
  // [ 'e' ]

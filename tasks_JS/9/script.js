//9. Напишіть функцію add, яка працюватиме наступним чином: add(1)(2)(7)...(n). Кількість послідовних викликів необмежена.

//currying func
function add(x) {
    //Внутрішня функція
    function addNext(y) {
        //Повертаємо нову функцію addNext зі сумую x + y
        return add(x + y)
    }
    // Перевантажуємо метод valueOf для можливості отримання суми
    addNext.valueOf = function () {
        return x;
    };

    return addNext;
}

console.log(Number(add(1)(2))); // 3
console.log(Number(add(1)(2)(5))); // 8
console.log(Number(add(1)(2)(-3)(4))); // 4
console.log(Number(add(1)(2)(3)(4)(-5))); // 5


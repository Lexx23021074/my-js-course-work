//_____________Task
// Функція checkStorage(storage, item) приймає два параметри:

// storage - масив рядків, що описує доступні товари на складі
// item - рядок з назвою товара, наявність якого потрібно перевірити
// Доповни код функції таким чином, щоб вона перевіряла, чи присутній такий товар в масиві storage і повертала:

// рядок "<item> is available to order!", де item - це назва товара, якщо товар було знайдено
// рядок "Sorry! We are out of stock!", якщо такого товара немає в масиві
// Зроби так, щоб пошук за ім'ям товару був незалежний від регістру, тобто наприклад "plum" і "pLuM" мають бути знайдені у масиві ["apple", "plum", "pear"].

// function checkStorage(storage, item) {
//     if (storage.includes(item.toLowerCase())) {
//         return `${item.toLowerCase()} is available to order!`
//     } else {
//         return `Sorry! We are out of stock!`
//     }
// }
// console.log(checkStorage(["apple", "plum", "pear"], "plum"));//повертає "plum is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pLuM"));//повертає "plum is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pear"));// );//повертає "pear is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "pEAr"));//повертає "pear is available to order!"
// console.log(checkStorage(["apple", "plum", "pear"], "orange"));//повертає "Sorry! We are out of stock!"
// console.log(checkStorage(["apple", "plum", "pear"], "carrot"));//повертає "Sorry! We are out of stock!"
//+++++++++++++++++++Task2
// Перед розв'язанням цієї задачі варто зазначити, що таке спільні елементи.
// Спільними елементами масивів називають ті елементи, які присутні у всіх масивах.

//     Наприклад, у двох масивах[1, 3, 5] і[0, 8, 5, 3] спільними будуть числа 3 і 5,
// оскільки вони присутні в обох вхідних масивах.А числа 0, 1 і 8 присутні тільки в одному з масивів.
// Функція getCommonElements(array1, array2), приймає два масиви (array1 та array2) довільної довжини в якості параметрів.
// Доповни код функції:

// Створи порожній масив для зберігання нового масиву.
// Використай цикл for для ітерації кожного елемента у array1.
// У тілі циклу перевір, чи поточний елемент існує у array2 за допомогою методу includes.
// Якщо він існує, то додай елемент до нового масиву.
// Поверни наповнений масив спільних елементів як результат роботи функції.
// Оголошена функція getCommonElements(array1, array2)
// function getCommonElements(array1, array2) {
//     if (!array1 || !array2) return [];
//     const comonArray = []

//     for (let i = 0; i < array1.length; i++){
//         if (array2.includes(array1[i])){
//             comonArray.push(array1[i]);
//         }
//     }
//     return comonArray;
// }
// console.log(getCommonElements([1, 2, 3], [2, 4]));// повертає [2]
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));// повертає [1, 2]
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]));// повертає [12, 27, 3]
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]));// повертає [10, 30, 40]
// console.log(getCommonElements([1, 2, 3], [10, 20, 30]));// повертає []
// console.log(getCommonElements());// з випадковими двома масивами повертає правильний масив
//======================Цикл for...of  , якщо не потрібен доступ до лічильника.
// const planets = ["Earth", "Mars", "Venus"];

// for (const planet of planets){
//     console.log(planet);
// }
// +++++++++++++Task
// Доповни код функції calculateTotalPrice(order) так, щоб вона повертала загальну суму чисел в масиві order. Використай цикл for...of для перебору масиву.
// function calculateTotalPrice(order) {
//     if (!order || order.length === 0) {
//         return 0;
//    }
//     let summ = 0;
//     for (const orde of order) {
//         summ = summ + orde;
        
//     }
//     return summ;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));// повертає 138
// console.log(calculateTotalPrice([164, 48, 291]));// повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));// повертає 1116
// console.log(calculateTotalPrice([]) );//повертає 0
// console.log(calculateTotalPrice());// з випадковим масивом чисел повертає правильну суму
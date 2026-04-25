/**
 * Синтаксис spread і rest
 *
 * - Залишкові параметри
 * - Збір частини аргументів
 * - Входження параметрів
 * - Створення масиву
 * - Створення об'єкта
 */

//!=========================================
// const numbers = [1, 3, 5, 6, 1, 2, 3, 5, 6];
// const copy = [...numbers];

// console.log(numbers);
// console.log(copy);

//!=========================================

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [7, 8, 9];
// const res = [...arr1, ...arr2, ...arr3, ...arr1, ...arr1];
// console.log(res);

//!=========================================
/**
 * Пошук найменшої аьо найбільшої температури (числа)
 */
//!=========================================

const temps = [18, 14, 12, 21, 17, 29, 24];
const max = Math.max(...temps);
console.log(max);

//!=========================================

const arr = [1, 2, 3];

arr.push(...temps);

console.log(arr);

//!=========================================

// const user = { firstname: 'Vasya', lastname: 'Antonenko' };
// const copy = { city: 'Dnipro', ...user, age: 25 };

// console.log(copy);

//!=========================================
/**
 * Створення масиву і тип за посиланням
 */
// const a = [{ x: 1 }, { y: 2 }, { z: 3 }];
// const b = a;

// console.log("a: ", a);
// console.log("b: ", b);

/*
 * Поєднуємо кілька масивів в один через spread
 */
// const lastWeekTemps = [1, 2, 3];
// const currentTemps = [4, 5, 6];
// const nextWeekTemps = [7, 8, 9];

// const allTemps = [];
// console.log(allTemps);
//!=========================================
/*
 * Створення об'єкта
 */

// const objA = { x: 1, y: 2 };
// const objB = { x: 0, z: 3 };

// const objC = {
//   ...objA,
//   ...objB,
// };

// console.log(objC);

/**
 * Оновлюємо налаштування користувача
 */

// const defaultSettings = {
//   theme: 'light',
//   showNotifications: true,
//   hideSidebar: false,
// };

// const userSettings = {
//   showNotifications: false,
//   hideSidebar: true,
// };

// const finalSettings = {
//   ...defaultSettings,
//   ...userSettings,
// };

// console.log(finalSettings);

//!=========================================

// function test(x, y, ...items) {
//   console.log(items);
// }
// test(10, 20, 30, 40, 50, 60);

// Math.max(10, 20, 30, 4, 5, 1, 2, 3, 5, 1, 1, 34, 5);
// [].push()

// [].splice(1,2,'heloo','test','awdaw')

//!=========================================

// function foo(...args) {
//   console.log(args);
// }

// foo(1, 3, 5, 1, 1);

// Псевдомасив arguments
// function sum(a, b) {
//   console.log(arguments);
//   return a + b;
// }

// sum(2, 5);
// function multiply() {
//     let total = 1;
//     for (const arg of arguments) {
//         total *= arg;
//     }
//     return total;
// }
// console.log(multiply(1, 2, 3)); //  6
// console.log(multiply(1, 2, 3, 4)); //  24
// console.log(multiply(1, 2, 3, 4, 5)); //  120

// function foo() {
//   // У змінній args буде повноцінний масив з усіх аргументів
//   const args = Array.from(arguments);
// 	return args.join("-");
// }

// console.log(foo(1, 2, 3)); // Поверне "1-2-3"
///++++++++++++++++ Task
// Функція createReversedArray() може приймати довільну кількість аргументів.Доповни код функції так,
// щоб вона повертала масив усіх аргументів, але в масиві вони повинні йти у зворотному порядку.Тобто,
//     при виклику createReversedArray(1, 2, 3), функція має повернути масив[3, 2, 1].
// Використовуй цикл або метод масиву toReversed(), який застосовується до масиву і 
// // результатом роботи повертає новий масив з елементами у зворотньому порядку.
// function createReversedArray() {
//     const reversed=[];

//     for (let i = arguments.length - 1; i >= 0; i--){
//         reversed.push(arguments[i]);
//        }
//     return reversed;
// }

// console.log(createReversedArray(12, 85, 37, 4));// повертає [4, 37, 85, 12]
// console.log(createReversedArray(164, 48, 291));// повертає [291, 48, 164]
// console.log(createReversedArray(412, 371, 94, 63, 176) );//повертає [176, 63, 94, 371, 412]
// console.log(createReversedArray());// повертає []
//+++++++++++Параметри за замовчуванням
// function greet(username = "Guest") {
//   console.log(`Hello, ${username}!`);
// }

// greet("Jacob"); // "Hello, Jacob!"
// greet();        // "Hello, Guest!"
// function count(from, to, step = 1) {
//     const rez = [];
//     console.log(`from: ${from}, to:${to}, step:${step}`);

//     for (let i = from; i <= to; i += step){
//         rez.push(i);
//     }
//     return rez
// }
// console.log(count(1, 15, 4)); // "from: 1, to: 15, step: 4"
// console.log(count(1, 15)); // "from: 1, to: 15, step: 1"
//++++++++++++++++TASK
//  Функція calculateTax(amount, taxRate)оголошує два параметри:

// amount - число, сума від якої потрібно обчислити податок. 
// Обов'язковий параметр.
// taxRate - число, податкова ставка. Необов'язковий параметр. За замовчуванням його значення має бути 0.2.
// Доповни код функції так, щоб вона повертала суму податку - результат множення суми на податкову ставку.

// function calculateTax(amount, taxRate = 0.2) {
//    return amount * taxRate;
    
//   }
// console.log(calculateTax(100, 0.1));// повертає 10
// console.log(calculateTax(200, 0.1));// повертає 20
// console.log(calculateTax(100, 0.2));// повертає 20
// console.log(calculateTax(200, 0.2));// повертає 40
// console.log(calculateTax(100, 0.3));// повертає 30
// console.log(calculateTax(200, 0.3));// повертає 60
// console.log(calculateTax(100));//ртає 20
// console.log(calculateTax(200));//ртає 40
//+++++++++ Функціональний вираз

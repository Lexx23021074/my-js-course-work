// ------------- примітивні дані
// let a = 5;

// let b = a;
// console.log(a); // 5
// console.log(b); // 5
// // Присвоєння за значенням, у пам'яті буде створено ще
// // одну ячейку, в яку буде скопійовано значення 5

// // Змінимо значення a
// a = 10;
// console.log(a); //10
// console.log(b); //5 значенне b не змінилося, оскільки це окрема копія
//=============== з масивами по-іншому
// const a = ["Mango", "Poly"];
// const b = a;
// console.log(a); //["Mango", "Poly"]
// console.log(b); //["Mango", "Poly"]
// // Змінимо масив, замінивши елемент з індексом 1, використовуючи посилання з a.
// a[1] = "jacob";
// console.log(a); //["Mango", "jacob"]
// console.log(b); //["Mango", "jacob"]
// b[0] = "Ajax";
// console.log(a); //["Ajax", "jacob"]
// console.log(b); //["Ajax", "jacob"]
// //Два масиви ніколи не дорівнюють один одному, навіть якщо вони порожні або в них однакові елементи.
// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3];

// console.log(arr1 === arr2);
// console.log([] === []);
// // при перетворенні масиву в  рядок усі елементи масиву обєднуються в один рядок обєднаний комами
// const array = [1, true, "Polly"];
// console.log(String(array));// "1,true,Polly"
// console.log(array + "5"); // "1,true,Polly5"
// // При перетворенні масиву в число алгоритм складається з двох кроків:

// // спочатку масив приводиться до рядка,
// // а потім цей рядок приводиться до числового значення.

// // Наприклад, порожній масив приводиться до порожнього рядка, який приводиться до числа 0.
// console.log(Number([]));// 0
// console.log(Number[1]); // 1
// console.log(Number([1, 2, 3])); NaN
// // При перетворенні масиву в логічне значення будь-який масив, навіть порожній, перетворюється на true.
// const emptyArray = [];
// const nonEmptyArray = [1, 2, 3];

// console.log(Boolean(emptyArray));
// console.log(Boolean(nonEmptyArray));

// if (emptyArray) {
//     console.log("if is in progress")
// } else {
//     console.log("else is not performed")
// }

// if (nonEmptyArray) {
//     console.log("if is in progress")
// } else {
//     console.log("else is not performed")
// }

// const array = [false];
// const result = array ? "A" : "B";
//// Метод Join
//Метод масиву join(delimiter) дозволяє об'єднати елементи масиву в рядок.
// У результуючому рядку елементи будуть розділені символом або групою символів, зазначених у delimiter.
// const words = ['JavaScript', "is", "amasing"];
// console.log(words.join("")); ///JavaScriptisamasing
// console.log(words.join(" ")); //JavaScript is amasing
// console.log(words.join("-")); // JavaScript-is-amasing

// //Метод join() корисний за необхідності перетворення масиву в рядок з певними роздільниками між елементами. 
// // Наприклад, нам потрібно написати функцію, яка перетворює рядки зі snake_case (
// // зміїної нотації з підкресленнями) в kebab-case (нотацію з тире).

// function trnsformString(string) {
//     const words = string.split("_");
//     return words.join("-");
// }

// console.log(trnsformString("user_age")); // user-age
// console.log(trnsformString("prise_per_droid")); //prise-per-droid
///task
// Функція getLength(array) очікує один параметр array - масив довільних значень. Доповни код функції так,
//  щоб вона перетворювала масив у рядок, без роздільників, і повертала кількість символів в отриманому рядку.

// Оголошена функція getLength(array)
// Виклик getLength(["Mango", "hurries", "to", "the", "train"]) повертає 22
// Виклик getLength(["M", "a", "n", "g", "o"]) повертає 5
// Виклик getLength(["top", "picks", "for", "you"]) повертає 14
// function getLength(array) {
//     const combinedArray = array.join("");
//     return combinedArray.length;
// }
// console.log(getLength(["Mango", "hurries", "to", "the", "train"]));
// console.log(getLength(["M", "a", "n", "g", "o"]));
// console.log(getLength(["top", "picks", "for", "you"]));

// +++++++++++++++++++++=Метод split()
// const name = "Mango";
// const letters = name.split("");
// console.log(letters); // ["M", "a", "n", "g", "o"]

// const message = "JavaScript essentials";
// const words = message.split(" ");
// console.log(words); // ["JavaScript", "essentials"]

// const slug = "amazing-french-recipes";
// const slugParts = slug.split("-");
// console.log(slugParts); // ["amazing", "french", "recipes"]
// task
// Сервісу гравірування прикрас потрібна функція, яка б автоматично рахувала ціну гравірування, залежно від кількості слів і ціни за слово.

// Оголошена функція calculateEngravingPrice(message, pricePerWord). Ця функція приймає першим параметром рядок,
//  що складається зі слів, розділених лише пробілами (параметр message) та другим параметром - число,
//  що містить ціну гравірування за одне слово (параметр pricePerWord).

// Доповни тіло функції так, щоб вона повертала загальну вартість гравірування усіх слів в рядку.

// Оголошена функція calculateEngravingPrice(message, pricePerWord)
// Виклик calculateEngravingPrice("JavaScript is in my blood", 10) повертає 50
// Виклик calculateEngravingPrice("JavaScript is in my blood", 20) повертає 100
// Виклик calculateEngravingPrice("Web-development is creative work", 40) повертає 160
// Виклик calculateEngravingPrice("Web-development is creative work", 20) повертає 80

// function calculateEngravingPrice(message, pricePerWord) {
//     const letters = message.split(" ").length * pricePerWord;
//     return letters;

// }
// console.log(calculateEngravingPrice("JavaScript is in my blood", 10));
// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));
// console.log(calculateEngravingPrice("Web-development is creative work", 40));
// console.log(calculateEngravingPrice("Web-development is creative work", 20));

// +++++++++++++++++++++Метод slice()
// const planets = ["Earth", "Mars", "Venus", "Jupiter", "Saturn"];
// console.log(planets.slice(0, 2));//['Earth', 'Mars']
// console.log(planets.slice(0, 4));// ['Earth', 'Mars', 'Venus', 'Jupiter']
// console.log(planets.slice(1, 3));//['Mars', 'Venus']
// // можна зберігати в змінну
// const result = planets.slice(1, 3);
// console.log(result);//['Mars', 'Venus']
// //якщо не вказати begin & end то буде створено точну копію вхідного масиву
// console.log(planets.slice())//["Earth", "Mars", "Venus", "Jupiter", "Saturn"]
// //Якщо не вказати end, копіювання відбуватиметься від begin до кінця масиву:
// console.log(planets.slice(1)); // ["Mars", "Venus", "Jupiter", "Saturn"]
// console.log(planets.slice(2)); // ["Venus", "Jupiter", "Saturn"]
// //Якщо значення begin негативне, а end не вказано, будуть скопійовані останні begin елементів 
// // (тобто стільки елементів з кінця, скільки вказано в параметрі begin):
// console.log(planets.slice(-2)); // ["Jupiter", "Saturn"]
// TASK
// Доповни код таким чином, щоб змінні містили часткові копії вихідного масиву fruits.

// firstTwoEls - масив із перших двох елементів
// nonExtremeEls - масив з усіх елементів, крім першого та останнього
// lastThreeEls - масив із трьох останніх елементів
// Оголошена змінна fruits
// Значення змінної fruits - це масив ["apple", "plum", "pear", "orange", "banana"]
// Оголошена змінна firstTwoEls
// Значення змінної firstTwoEls - це масив ["apple", "plum"]
// Оголошена змінна nonExtremeEls
// Значення змінної nonExtremeEls - це масив ["plum", "pear", "orange"]
// Оголошена змінна lastThreeEls
// Значення змінної lastThreeEls - це масив ["pear", "orange", "banana"]
// const fruits = ['apple', 'plum', 'pear', 'orange', 'banana'];

// const firstTwoEls = fruits.slice(0,2);
// const nonExtremeEls =fruits.slice(1,4) ;
// const lastThreeEls = fruits.slice(-3);

// console.log(firstTwoEls);
// console.log(nonExtremeEls);
// console.log(lastThreeEls);
// Метод concat() - concat(arr1, arr2, ..., arrN) використовується для об'єднання двох або більше масивів.
// const firstArray = ["Mercury", "Venus"];
// const secondArray = ["Mars", "Jupiter"];
// const result = firstArray.concat(secondArray);
// console.log(result);
// // вихідні масиви залишаються незмінними
// console.log(firstArray); // ["Mercury", "Venus"];
// console.log(secondArray); // ["Mars", "Jupiter"];
// //Порядок аргументів методу визначає порядок розташування елементів у новому масиві.
// const thirdArray = ["Saturn", "Neptune"];
// console.log(firstArray.concat(secondArray, thirdArray)); 
// // ['Mercury', 'Venus', 'Mars', 'Jupiter', 'Saturn', 'Neptune'];

// console.log(firstArray.concat(thirdArray, secondArray)); 
// // ['Mercury', 'Venus', 'Saturn', 'Neptune', 'Mars', 'Jupiter', ];
// Task
// Оголоси змінну allClients та доповни код таким чином, щоб її значенням було посилання на масив, 
// що складається з усіх елементів масивів oldClients і newClients. Спочатку мають іти елементи з масива oldClients, а потім з newClients.
// Оголошена змінна oldClients
// Значення змінної oldClients - це масив ["Mango", "Ajax", "Poly", "Kiwi"]
// Оголошена змінна newClients
// Значення змінної newClients - це масив ["Peach", "Houston"]
// Оголошена змінна allClients
// Значення змінної allClients - це масив ["Mango", "Ajax", "Poly", "Kiwi", "Peach", "Houston"]
// Змінній allClients присвоєний масив після застосування методу concat з правильними аргументам
// const oldClients = ["Mango", "Ajax", "Poly", "Kiwi"];
// const newClients = ["Peach", "Houston"];
// const allClients = oldClients.concat(newClients)
// console.log(allClients);
// Метод indexOf() використовується для визначення індексу першого входження елемента elem у масиві
// const clients = ["Mango", "Ajax", "Poly", "Kiwi", "Poly"];
// console.log(clients.indexOf("Poly"));//2
// console.log(clients.indexOf("Monkong"));//-1  повертає -1, оскільки елемент **"**Monkong**"** не знайдений у масиві.
// TASK   Функція getSlice(array, value) приймає два параметра:

// array - масив довільних елементів
// value - значення елемента масиву для пошуку
// Доповни код функції getSlice(array, value) так, щоб вона виконувала пошук значення value у масиві array і повертала:

// порожній масив, якщо в array немає елемента зі значенням value
// підмасив, що починається з початку array і до елемента зі значенням value включно, якщо такий елемент є в array
// Оголошена функція getSlice(array, value)
// Виклик getSlice(["Mango", "Poly", "Ajax"], "Poly") повертає ["Mango", "Poly"]
// Виклик getSlice(["Mango", "Poly", "Ajax"], "Ajax") повертає ["Mango", "Poly", "Ajax"]
// Виклик getSlice(["Mango", "Poly", "Ajax"], "Mango") повертає ["Mango"]
// Виклик getSlice(["Mango", "Poly", "Ajax"], "Jacob") повертає []
// Виклик getSlice(["Mango", "Poly", "Ajax"], "Casey") повертає []
// function getSlice(array, value) {
//     const index = array.indexOf(value);
//     return array.slice(0,index+1);
// }
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Poly") );//повертає ["Mango", "Poly"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Ajax") );//повертає ["Mango", "Poly", "Ajax"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Mango") );//повертає ["Mango"]
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Jacob") );//повертає []
// console.log(getSlice(["Mango", "Poly", "Ajax"], "Casey") );//повертає []
// Метод push() - використовується для додавання одного або більше елементів у кінець масиву.
// const planets = ["Earth", "Mars", "Venus"];

// planets.push("Jupiter");
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter']

// planets.push("Saturn", "Neptune");
// console.log(planets); // ['Earth', 'Mars', 'Venus', 'Jupiter', "Saturn", "Neptune"]

// // За допомогою циклу ми можемо виконувати повторювані операції
// const tags = [];

// for (let i = 0; i < 3; i += 1){
//     tags.push(`tag-${i}`)
//     console.log(tags);
// }
// console.log(tags);
// Task
// Функція createArrayOfNumbers(min, max) приймає два параметра:

// min - ціле число, з якого починаються обчислення
// max - ціле число, до якого включно триватимуть обчислення
// Доповни код функції createArrayOfNumbers(min, max) таким чином, щоб вона повертала масив усіх цілих чисел від значення min до max включно.

// Оголошена функція createArrayOfNumbers(min, max)
// Виклик функції createArrayOfNumbers(1, 3) повертає [1, 2, 3]
// Виклик функції createArrayOfNumbers(14, 17) повертає [14, 15, 16, 17]
// Виклик функції createArrayOfNumbers(29, 34) повертає [29, 30, 31, 32, 33, 34]
// Виклик функції createArrayOfNumbers() з випадковими min і max повертає правильний масив
// В циклі for використовувався метод push
// function createArrayOfNumbers(min, max) {
//     const number = [];
//     for (let i = min; i <= max; i += 1){
//         number.push(i);
//     } 
//     return number
// }
// console.log(createArrayOfNumbers(1, 3));// повертає [1, 2, 3]
// console.log(createArrayOfNumbers(14, 17));// повертає [14, 15, 16, 17]
// console.log(createArrayOfNumbers(29, 34)); //повертає [29, 30, 31, 32, 33, 34]
// console.log(createArrayOfNumbers() );//
// Ітерація по масиву
// TASK
// Функція calculateTotalPrice(order) приймає один параметр order - масив чисел.Доповни функцію так,
//     щоб вона повертала загальну суму елементів з масиву order.

// function calculateTotalPrice(order) {
//     let sum = 0;
//        if (!Array.isArray(order)){
//            return 0;
//   }
    
//     for (let i = 0; i < order.length; i += 1 ) {
//         sum = sum + order[i];
//     }
//     return sum;
        
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));//повертає 138
// console.log(calculateTotalPrice([164, 48, 291]));//повертає 503
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));//повертає 1116
// console.log(calculateTotalPrice());//з випадковим масивом повертає правильне значення
//Task2
//Функція getEvenNumbers(start, end) має два параметри start та end, які є цілими числами.
//  Доповни код функції так, щоб вона повертала масив усіх парних чисел від start до end. 
// Якщо жодного парного числа немає, то масив має бути пустим. Парним вважається число, 
// яке ділиться на 2 без остачі (10 % 2 === 0). Використовуй цикл for.

// function getEvenNumbers(start, end) {
//     const result = [];

//     for (let i = start; i <= end; i += 1){
//         if (i % 2 === 0){
//             result.push(i);
//         }
//     }
//     return result
// }
// console.log(getEvenNumbers(2, 5));// повертає [2, 4]
// console.log(getEvenNumbers(3, 11));// повертає [4, 6, 8, 10]
// console.log(getEvenNumbers(6, 12));// повертає [6, 8, 10, 12]
// console.log(getEvenNumbers(8, 8));// повертає [8]
// console.log(getEvenNumbers(7, 7));// повертає []
// console.log(getEvenNumbers());// з випадковими start і end повертає правильний масив
//++++++++++++++++++++++++++Метод includes()
// const planets = ["Earth", "Mars", "Venus"];

// console.log(planets.includes("Earth")); // true
// console.log(planets.includes("Mars")); // true
// console.log(planets.includes("Venus")); // true
// console.log(planets.includes("Jupiter")); // false
const fruits = ["apple", "banana", "orange"];

if (fruits.includes("banana")) {
  console.log("The array has an element banana");
} else {
  console.log("Array does not contain banana element");
}

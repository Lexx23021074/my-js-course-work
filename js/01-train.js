// let grade = 85;

// if (grade >= 70) {
//     console.log("Satisfactory");
// } else {
//     console.log("Unsatisfactory")
// }
// grade = 40;

// if (grade >= 70) {
//   console.log("Satisfactory");
// } else {
//   console.log("Unsatisfactory");
// }
// function checkGrade(grade) {
//   if (grade >= 70) {
//     return "Satisfactory";
//   } else {
//     return "Unsatisfactory";
//   }
// }
// console.log(checkGrade(40)); // Unsatisfactory
// console.log(checkGrade(75)); // Satisfactory

// function checkStorage1(available, ordered) {
//     if (available <= ordered) {
//         return "Not enough goods in stock!"
//     } else {
//         return "Order is processed, our manager will contact you"
//     } 
// }
// console.log(checkStorage1(100, 50));
// console.log(checkStorage1(200, 20));
// console.log(checkStorage1(200, 150));
// console.log(checkStorage1(150, 180));

// grade = 85;

// if (grade >= 90) {
//   console.log("Perfectly");
// } else if (grade >= 80) {
//   console.log("Good");
// } else if (grade >= 70) {
//   console.log("Satisfactorily");
// } else {
//   console.log("Unsatisfactorily");
// }
// function checkStorage(available, ordered) {
//     if (available < ordered) {
//         return `Your order is too large, there are not enough items in stock!`
//     } else if (ordered == 0){
//         return "There are no products in the order!"
//     } else if (available >= ordered) {
//         return `The order is accepted, our manager will contact you`
//     }
// }
// console.log(checkStorage(100, 50));
// console.log(checkStorage(100, 130));
// console.log(checkStorage(70, 0));
// console.log(checkStorage(200, 20));
// console.log(checkStorage(200, 250));
// console.log(checkStorage(150, 0));
// console.log(checkStorage(80, 80));

// let type;
// const age = 20;

// if (age >= 18) {
//   type = 'adult';
// } else {
//   type = 'child';
// }

// console.log(type); // 'adult'
// // це те саме з теринарником
// const age1 = 20;
// const type1 = age1>= 18 ? 'adult' : 'child';
// console.log(type1); // 'adult'

// const a = 5;
// const b = 10;
// let biggerNumber;

// if (a > b) {
//   biggerNumber = a;
// } else {
//   biggerNumber = b;
// }

// console.log(biggerNumber); // 10
// // Те саме з теринарником
// const a1 = 5;
// const b2= 10;
// const biggerNumber2 = a1 > b2 ? a1 : b2;

// console.log(biggerNumber); // 10

// // # ще одне визничення за доп теринарника

// function getBiggerNumber(a3, b3) {
//   return a3 > b3 ? a3 : b3;
// }

// console.log(getBiggerNumber(5, 10)); // 10
// console.log(getBiggerNumber(20, 15)); // 20
// console.log(getBiggerNumber(7, 7)); // 7

// function checkPassword(password) {
//   const correctPassword = "jqueryismyjam";
//   return password !== correctPassword
//     ? "Access denied, wrong password!" 
//     :"Access granted";
// }

// console.log(checkPassword("jqueryismyjam"));
// console.log(checkPassword("angul4r1sl1f3"));
// console.log(checkPassword("r3actsux"));
// // Case
// const fruit = 'bananas';

// switch (fruit) {
//   case 'apple':
//     console.log('Apple selected');
//     break;
//   case 'banana':
//     console.log('Banana selected');
//     break;
//   case 'orange':
//     console.log('Orange selected');
//     break;
//   default:
//     console.log('The fruit is unknown');
// }

// const day = 3;

// switch (day) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//     console.log('This is a working day');
//     break;
//   case 6:
//   case 7:
//     console.log('It is a day off');
//     break;
//   default:
//     console.log('Invalid');
// }

// function getSubscriptionPrice(type) {
//     switch (type) {
//         case "starter":
//             return 0;
//         case "professional":
//             return 20;
//         case "organization":
//             return 50;
//         default:
//             return "Invalid subscription type!";
//     }
// }    
// console.log(getSubscriptionPrice("professional"));
// console.log(getSubscriptionPrice("organization"));
// console.log(getSubscriptionPrice("starter"));
// console.log(getSubscriptionPrice("random"));
// console.log(getSubscriptionPrice("premium"));

// // Блокова структура
// // Глобальна змінна
// const value = "I'm a global variable";

// if (true) {
//   //можна звернутись до глобальної змінної
//   console.log(value); // I'm global variable"
// }

// //Можна звернутись до глобальної змінної
// console.log(value); //"I'm a global variable"

// if (true) {
//   const value1 = "I'm local variable"
// }
// // Помилка: локальну змінну не видно за межами блоку
// // console.log(value1); //ReferenceError: value is not defined

// // const globalVar = "Global";

// // console.log(globalVar); // Доступ до globalVar з глобальної області видимості
// // // Немає доступу до aVar, bVar і cVar

// // if(true) {

// // console.log(globalVar); // Доступ до globalVar із глобальної області видимості
// // // Немає доступу до aVar, bVar і cVar

// // if(true) {
// // 	const cVar = "C";
// //   console.log(globalVariable); // Доступ до globalVar з блоку C
// //   console.log(cVar); // Доступ до cVar з блоку C
// // 	// Немає доступу до aVar і bVar
// // }

// // console.log(globalVar); // Доступ до globalVar із глобальної області видимості
// // 	const aVar = "A";
// // 	console.log(globalVar); // Доступ до globalVariable з блоку A
// //   console.log(aVar); // Доступ до aVar з блоку A
// // 	// Немає доступу до bVar і cVar

// // 	if(true) {
// // 		const bVar = "B";
// // 		console.log(globalVar); // Доступ до globalVariable з блоку B
// // 	  console.log(aVar); // Доступ до aVar з блоку B
// // 	  console.log(bVar); // Доступ до bVar з блоку B
// // 		// Немає доступу до cVar
// // 	}
// // }
// // Немає доступу до aVar, bVar і cVar
// //+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// if (null) {
//   console.log("Block if")
// } else {
//   console.log("Block else")
// }

// if (0) {
//   console.log("Dlock if")
// } else {
//   console.log("Block else")
// }

// if (5) {
//   console.log("Block if")
// } else {
//   console.log("Block else")
// }
// if ("batman") {
//   console.log("Block if")
// } else {
//   console.log("Block else")
// }
// console.log("hello" && 5); // 5
// console.log(5 && "hello"); // "hello"

// console.log("mango" && "poly"); // "poly"
// console.log("poly" && "mango"); // "mango"

// console.log(3 && true); // true
// console.log(true && 3); // 3

// console.log("hello" && 0); // 0
// console.log(0 && "hello"); // 0

// console.log(3 && false); // false
// console.log(false && 3); // false

// console.log(0 && ""); // 0
// console.log("" && 0); // ""

//   const screenWidth = 700;
// const sm = 320;
// const md = 768;
// const lg = 1200;

// if(screenWidth <= sm) {
// 	console.log("Mobile screen");
// } else if(screenWidth > sm && screenWidth <= md) {
// 	console.log("Tablet screen");
// } else if(screenWidth > md && screenWidth <= lg) {
// 	console.log("Desktop screen");
// } else {
// 	console.log("Godzilla screen");
// }
// function getScreenType(screenWidth) {
//   const sm = 320;
//   const md = 768;
//   const lg = 1200;

//   if (screenWidth <= sm) {
//     return "Mobile screen";
//   } else if (screenWidth > sm && screenWidth <= md) {
//     return "Tablet screen";
//   } else if (screenWidth > md && screenWidth <= lg) {
//     return "Desktop screen";
//   } else {
//     return "Godzilla screen";
//   }
// }

// console.log(getScreenType(700));  // "Tablet screen"
// console.log(getScreenType(1200)); // "Desktop screen"
// console.log(getScreenType(1500)); // "Godzilla screen"
// console.log(getScreenType(320));  // "Mobile screen"

// function getSubstring(string, length) {
//     const substring=string.slice(0,length);
//     return substring;
// }
//   console.log(getSubstring("Hello world", 3));
//   console.log(getSubstring("Hello world", 5));
//   console.log(getSubstring("Hello world", 8));
//   console.log(getSubstring("Hello world", 11));
// console.log(getSubstring("Hello world", 0));
  
// const message = "Welcome to Bahamas!";
// console.log(message.toLowerCase()); // "welcome to bahamas!"
// console.log(message); // "Welcome to Bahamas!"

// const message1 = "Welcome to Bahamas!";
// console.log(message1.toUpperCase()); // "WELCOME TO BAHAMAS!"
// console.log(message1); // "Welcome to Bahamas!"

// console.log('saMsUng' === 'samsung'); // false
// console.log('saMsUng' === 'SAMSUNG'); // false

// const brandName = 'samsung';
// const userInput = 'saMsUng';
// const lowercaseInput = userInput.toLowerCase();

// console.log(brandName); // 'samsung'
// console.log(userInput); // 'saMsUng'
// console.log(userInput === brandName); // false
// console.log(lowercaseInput); // 'samsung'
// console.log(lowercaseInput === brandName); // true

// const username = 'Jacob Mercer';

// console.log(username.includes('Jacob')); // true
// console.log(username.includes('John')); // false
// console.log(username.includes('Mercer')); // true
// console.log(username.includes('Doe')); // false
// function createFileName(name, ext) {
//   const trimmedName = name.trim();
  
//   return `${trimmedName}.${ext}`;
// }
// console.log(createFileName(" order ", "txt"));
// console.log(createFileName("report ", "csv"));
// console.log(createFileName(" presentation", "xml"));

// // цикли
// let count = 0;

// while (count < 10) {
//   console.log(`Count: ${count}`);
//   count += 1;
// }

// function calculateTotal(number) {
//   let total = 0;
//   let i = 1; // Починаємо з одиниці

//   while (i <= number) {
//     total += i; // Додаємо поточне число до загальної суми
//     i += 1;     // Збільшуємо лічильник, щоб не зациклитися
//   }

//   return total;
// }
// console.log(calculateTotal(1));
// console.log(calculateTotal(3));
// console.log(calculateTotal(0));
// console.log(calculateTotal(18));
// console.log(calculateTotal(24));
// console.log(calculateTotal());

// console.log('++++++++++++++++++++++++++++++++++++++++++++++++++')
// console.log('цикли do...while')
// console.log('++++++++++++++++++++++++++++++++++++++++++++++++++')
// let count1 = 0;
  
// do {
//   console.log(`Count:${count1}`);
//   count1 += 1;
// } while (count1 < 5);
// console.log('++++++++++++++++++++++++++++++++++++++++++++++++++')
// console.log('Цикл For >>> for(Ініціалізація;умова;повствираз{Тіло циклу} for (let i = 0; i <= 20; i += 5)for (let i = 20; i >=0; i -= 5)')
// console.log('++++++++++++++++++++++++++++++++++++++++++++++++++')
// for (let i = 0; i <= 20; i += 5){
//   console.log( `спочатку задажм стартовий лічильник, потім перевіряємо си він не дойшов до 20 і якщо не дійшов то додаємо 5  i=${i}`)
// }
// for (let i = 20; i >=0; i -= 5){
//   console.log( `і в зворотній бік від 20 до 0 з кроком 5 i=${i}`)
// }
// console.log('++++++++++++++++++++++++++++++++++++++++++++++++++')
// console.log('функція яка підсумовує всі числа від 0 до заданого  і повертає результат')
// console.log('++++++++++++++++++++++++++++++++++++++++++++++++++')
// function sumUpTo(number) {
//   let sum = 0; // стартовий лічильник

//   for (let i = 0; i <= number; i += 1){
//     sum += i; //збільшуємо значення summ на значення i по ходу вони ммали буи бути рівні 
//     // console.log(`i=${i}`)
//   }
//   return sum;
// }
// console.log(sumUpTo(5));
// console.log(sumUpTo(10));
// console.log(sumUpTo(0));
// /*
// Функція calculateTotal(number) приймає ціле число (параметр number) Використовуючи цикл for, доповни код функції так, 
// щоб вона повертала суму всіх цілих чисел від одиниці до цього числа включно. Наприклад, якщо number дорівнює 3, 
// то сума - це 1 + 2 + 3, тобто 6.
// */
// function calculateTotal(number) {
//   let sum = 0;
//   for (let i = 1 ; i <= number; i += 1){
//     sum += i;
//   }
// return( `num=${number} сума рівна ${sum}`)

// }

// console.log(calculateTotal(1));// повертає 1
// console.log(calculateTotal(0));// повертає 0
// console.log(calculateTotal(7));// повертає 28
// console.log(calculateTotal(18));// повертає 171
// console.log(calculateTotal(24));// повертає 300
// console.log(calculateTotal());// з випадковим числом повертає правильне значення
// console.log('++++++++++++++++++++++++++++++++++++++++++++++++++')
// console.log('Інкремент і декремент')
// console.log('++++++++++++++++++++++++++++++++++++++++++++++++++')
// let x = 5;
// let y = ++x;
// console.log("y = ++x тут значення спочатку збільшилось  а потім його віддали")
// console.log(x ); // 6
// console.log(y); // 6

// let x1 = 5;
// let y1 = x1++;
// console.log("y = x++ тут значення спочатку збільшилось  а потім його віддали")
// console.log(x1); // 6
// console.log(y1); // 5
// console.log("аналогічно y = x--(--х) тільки зменшення")
// let x2 = 5;
// const y2 = --x2;
// console.log(x2); // 4
// console.log(y2); // 4
// let x3 = 5;
// const y3 = x3--;
// console.log(x3); // 4
// console.log(y3); // 5
// console.log("варіант використання- лічильник")
// for (let i = 0; i <= 5; i++) {
//   console.log(i);
// }
/*
Функція calculateEvenTotal(number) приймає ціле число (параметр number).
 Доповни код функції так, щоб вона повертала суму всіх парних цілих чисел від одиниці до цього числа включно.
  Парні числа — це ті, що можна поділити на 2 без остачі (як це зробити розглядалося у темі Арифметичні операції у модулі 1).
  Наприклад, якщо number дорівнює 6, то сума - це 2 + 4 + 6, тобто 12.
*/

// function calculateEvenTotal(number) {
//   let evenSum = 0;
//   for (let i = 1; i <= number; i++){
//     if (i % 2 === 0) {
//       evenSum += i;
//     }
//   }
// return( `num=${number} сума рівна ${evenSum}`)

// }
// console.log(calculateEvenTotal(1));
// console.log(calculateEvenTotal(3));
// console.log(calculateEvenTotal(7));
// console.log(calculateEvenTotal(18));
// console.log(calculateEvenTotal(27));
// console.log(calculateEvenTotal());// з випадковим числом повертає правильне значення 
// console.log('++++++++++++++++++++++++++++++++++++++++++++++++++');
// console.log('Оператор break');
// console.log('++++++++++++++++++++++++++++++++++++++++++++++++++');
// const number = 7;
// for (let i = 0; i < number; i += 1){
//   console.log(i);

//   if (i === 5) {
//     console.log('якщо зустрінеться число 5 треба перевати цикл, не зважаючи чи виконалась умова циклу чи ні')
//     break
//   }
// }
// console.log("Log after cycle")
/*
Доповни код таким чином, щоб у змінну number записувалося 
перше число у проміжку від start до end, яке ділиться на 5 без остачі.
*/
// const start = 6;
// const end = 17;
// let number;
// for (let i = start; i <= end; i += 1){
//   if (i % 5 === 0) {
//     number = i;
//     break
//   }
  
// }
// console.log(number)
// console.log('++++++++++++++++++++++++++++++++++++++++++++++++++');
// console.log('Оператор break і функції ');
// console.log('++++++++++++++++++++++++++++++++++++++++++++++++++');
// function findNumber(max, target) {
// 	console.log("Log in the body of the function before the cycle");

//   for (let i = 5; i <= max; i += 1) {
//     console.log("Current counter value i:", i);

//     if (i === target) {
//       console.log(`Found the number $ {target}, interrupt the cycle`);
// 			break;
//     }
//   }

//   console.log("Log in body function after cycle");
// }

// findNumber(10, 6);
// console.log("Log after exiting function");
// function findNumber(max, target) {
// 	console.log("Log in the body of the function before the cycle");

// 	for (let i = 5; i <= max; i += 1) {
// 	    console.log("Current counter value i:", i);
	
// 	    if (i === target) {
// 	      console.log(`Found the number $ {target}, we make a return, interrupting the loop and function`);
// 				return i;
// 	    }
// 	  }

//   // Цей console.log не виконується
//   console.log("Log in body function after cycle");
// }

// const result = findNumber(10, 6);
// console.log("Log after exiting function");
// console.log(`Result of function execution ${result}`);
/*
Функція findNumber(start, end, divisor) приймає три параметра, які є цілими числами.

Доповни код функції таким чином, щоб вона:

повертала перше число у діапазоні від start до end включно, яке ділиться на divisor без остачі
не використовуй оператор break
*/
function findNumber(start, end, divisor) {
  for (let i = start; i <= end; i += 1) {
    if (i % divisor === 0) {
      return i;
    }
  }
}

console.log(findNumber(2, 6, 5));// повертає 5
console.log(findNumber(8, 17, 3));// повертає 9
console.log(findNumber(6, 9, 4));// повертає 8
console.log(findNumber(16, 35, 7));// повертає 21
console.log(findNumber());// з випадковим набором чисел повертає правильний результат
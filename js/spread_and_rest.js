//=====================Синтаксис spread і rest==============================
//=====================Залишкові параметри=============================
//++++++++++++++++++++++Завдання +++++++++++++++++++++++++++++++++++++++++++
// Використовуючи синтаксис залишкових параметрів, доповни код функції add() так,
// щоб вона приймала будь - яку кількість аргументів у параметр args і повертала їхню суму.

// Оголошена функція add
// Функція add оголошує параметр args
// Для збирання аргументів у змінну args у підписі функції використовується синтаксис залишкових параметрів
// function add(...args) {
//     let total = 0;
//     for (const arg of args) {
//         total += arg;
//     }
//     return total;

// }

// console.log(add(15, 27));//повертає 42
// console.log(add(12, 4, 11, 48));// повертає 75
// console.log(add(32, 6, 13, 19, 8));// повертає 78
// //=====================Збір частини аргументів=============================
// function multiply(first, second, ...args) {
//   console.log(first, second, args);
// }

// multiply(1, 2); // 1 2
// multiply(1, 2, 3); // 1 2 [3] 
// multiply(1, 2, 3, 4); // 1 2 [3, 4]
//++++++++++++++++++++++Завдання +++++++++++++++++++++++++++++++++++++++++++
// Функція addOverNum() приймає довільну кількість аргументів чисел.

// Доповни код функції таким чином, щоб вона обчислювала суму тільки тих аргументів, які більші за задане число. Це число завжди буде передано першим аргументом.

// Для вирішення цього завдання тобі потрібно зробити наступне:

// Перший параметр value повинен представляти задане число, а решта аргументів повинні бути зібрані за допомогою синтаксису (...args)
// Усередині функції ініціалізуй змінну для зберігання загальної суми
// Потім пройдись по кожному аргументу за допомогою циклу
// Перевір, чи кожен аргумент більший за вказане число, і якщо так, додай його до загальної суми
// На завершення поверни загальну суму
// Оголошена функція addOverNum()
// function addOverNum(value,...args) { 
//     let total = 0;
//     for (const arg of args) {
//         if (value < arg) {
//             total += arg;
//         } 
//     }
//     return total;
// }

// console.log(addOverNum(50, 15, 27));// повертає 0
// console.log(addOverNum(10, 12, 4, 11, 48, 10, 8));// повертає 71
// console.log(addOverNum(15, 32, 6, 13, 19, 8));// повертає 51
// console.log(addOverNum(20, 74, 11, 62, 46, 12, 36));// повертає 218
// //=====================Входження параметрів=============================
// console.log(Math.max(14, -4, 25, 8, 11));
// const temps = [14, -4, 25, 8, 11];
// console.log(temps);
// console.log(Math.max(...temps));
//++++++++++++++++++++++Завдання +++++++++++++++++++++++++++++++++++++++++++
// Функція getExtremeScores(scores) приймає масив оцінок (чисел) у параметрі scores.

// Доповни код функції так, щоб вона повертала об'єкт із двома властивостями:

// Властивість best має містити найбільше число з масиву scores
// Властивість worst має містити найменше число з масиву scores.
// Використовуй оператор (...spread) і методи Math.max() і Math.min().
// function getExtremeScores(scores) {

//     return {
//         best: Math.max(...scores), worst: Math.max(...scores)
//     };
// }
// getExtremeScores([89, 64, 42, 17, 93, 51, 26]);
// getExtremeScores([19, 7, 4, 17, 81, 24]);
// //=====================Створення масиву============================
// const temps = [14, -4, 25, 8, 11];

// // Це точна, але незалежна копія масиву temps
// const copyOfTemps = [...temps];
// console.log(copyOfTemps); // [14, -4, 25, 8, 11]
// // У наступному прикладі ми зсипаємо яблука з двох ящиків в один новий.
// const lastWeekTemps = [14, 25, 11];
// const currentWeekTemps = [23, 17, 18];
// const allTemps = [...lastWeekTemps, ...currentWeekTemps];
// console.log(allTemps); // [14, 25, 11, 23, 17, 18]
//++++++++++++++++++++++Завдання +++++++++++++++++++++++++++++++++++++++++++
// У змінних firstGroupScores, secondGroupScores і thirdGroupScores зберігаються результати тестування окремих груп.
//  Використовуючи розпилення, доповни код таким чином, щоб:

// У змінній allScores зберігався масив всіх результатів від першої до третьої групи включно.
// У змінній bestScore був найвищий загальний бал.
// У змінній worstScore був найнижчий загальний бал.

// Оголошена змінна firstGroupScores
// Значення змінної firstGroupScores - це масив [64, 42, 93]
// Оголошена змінна secondGroupScores
// Значення змінної secondGroupScores - це масив [89, 14, 51, 26]
// Оголошена змінна thirdGroupScores
// Значення змінної thirdGroupScores - це масив [29, 47, 18, 97, 81]
// Оголошена змінна allScores.
// Значення змінної allScores - це масив [64, 42, 93, 89, 14, 51, 26, 29, 47, 18, 97, 81]
// Оголошена змінна bestScore
// Значення змінної bestScore - це число 97
// Оголошена змінна worstScore
// Значення змінної worstScore - це число 14
// Для присвоєння значення змінної allScores використовувався синтаксис ... для заповнення масиву
// Для передачі аргументів методу Math.max() використовується синтаксис ... на масиві allScores
// Для передачі аргументів методу Math.min() використовується синтаксис ... на масиві allScores


// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];

// const allScores = [...firstGroupScores,...secondGroupScores,...thirdGroupScores];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);

// console.log(allScores);
// console.log(bestScore);
// console.log(worstScore);

// //=====================Створення об'єкта============================

// Операція spread дозволяє розпилити властивості довільної кількості об'єктів в один новий.

// const first = { propA: 5, propB: 10 };
// const second = { propC: 15 };
// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// Порядок розподілу має значення.Імена властивостей об'єкта — унікальні, тому властивості об'єкта, що розпиляються,
//     можуть перезаписати значення вже існуючої властивості, якщо їх імена збігаються.

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15, propD: 20 };

// const third = { ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15, propD: 20 }

// const fourth = { ...second, ...first };
// console.log(fourth); // { propA: 5, propB: 10, propC: 50, propD: 20 }


// Під час розпилення можна додавати властивості в довільне місце. 
// Головне пам'ятати про унікальність імені властивості і про те, що її значення може бути перезаписане.

// const first = { propA: 5, propB: 10, propC: 50 };
// const second = { propC: 15 };

// const third = { propB: 20, ...first, ...second };
// console.log(third); // { propA: 5, propB: 10, propC: 15 }

// const fourth = { ...first, ...second, propB: 20 };
// console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

// const fifth = { ...first, propB: 20, ...second };
// console.log(fifth); // { propA: 5, propB: 20, propC: 15 }
//++++++++++++++++++++++Завдання +++++++++++++++++++++++++++++++++++++++++++
В конструкторі можна створювати нові тести, для яких є налаштування за замовчуванням, які зберігаються у змінній defaultSettings.
 Під час створення тесту, усі або частину налаштувань можна перевизначити,
    користувацькі налаштування зберігаються у змінній overrideSettings.

Для того щоб отримати фінальні налаштування тесту, необхідно взяти налаштування за замовчуванням і
 поверх них застосувати перевизначені користувацькі налаштування.
 Доповни код таким чином, щоб у змінній finalSettings утворився об'єкт фінальних налаштувань тесту.

Оголошена змінна defaultSettings
Значення змінної defaultSettings - це об'єкт
Оголошена змінна overrideSettings
Значення змінної overrideSettings - це об'єкт
Оголошена змінна finalSettings
Значення змінної finalSettings - це об'єкт
Значення властивості finalSettings.theme дорівнює "light"
Значення властивості finalSettings.public дорівнює "false"
Значення властивості finalSettings.withPassword дорівнює "true"
Значення властивості finalSettings.minNumberOfQuestions дорівнює 10
Значення властивості finalSettings.timePerQuestion дорівнює 30
Для присвоєння значення змінній finalSettings використовується синтаксис ...

const defaultSettings = {
  theme: "light",
  public: true,
  withPassword: false,
  minNumberOfQuestions: 10,
  timePerQuestion: 60,
};
const overrideSettings = {
  public: false,
  withPassword: true,
  timePerQuestion: 30,
};

const finalSettings = { ...defaultSettings, ...overrideSettings};
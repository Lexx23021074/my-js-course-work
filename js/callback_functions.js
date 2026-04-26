//+++++++++++++++++++Функція як значення++++++++++++++++++++++++
// function greet(name) {
//     return `Welcome ${name}!`;
// }

// // Викликаємо функцію greet і виводимо результат у консоль
// console.log(greet("Mango")); // "Welcome Mango!"

// // Виводимо функцію greet у консоль, не викликаючи її
// console.log(greet); // ƒ greet() {return `Welcome ${name}!`}
//=======================Task==================================
// Функція makePizza повертає рядок з повідомленням клієнту.

// Доповни код таким чином, щоб у змінній result був результат виконання функції makePizza,
//     а у змінній pointer було посилання на функцію makePizza.
//     Оголошена змінна result
//     Значення змінної result - це рядок "Your pizza is being prepared, please wait."
//     Значення змінної result отримане за допомогою виклику функції
//     Оголошена змінна pointer
//     Значення змінної pointer - це посилання на функцію makePizza

// function makePizza() {
//     return "Your pizza is being prepared, please wait.";
// }
// const result = makePizza();
// const pointer = makePizza;
// //+++++++++++++++++++Колбек-функції++++++++++++++++++++++++
// function greet(name) {
//     console.log(`Welcome ${name}!`);
// }

// function notify(name) {
//     console.log(`Dear ${name}, your room will be ready in 30 minutes`);
// }

// function registerGuest(name, callback) {
//     console.log(`Registering ${name}!`);
//     callback(name);
// }

// registerGuest("Mango", greet); // "Registering Mango!"
// // "Welcome Mango!"

// registerGuest("Mango", notify); // "Registering Mango!"
// // "Dear Mango, your room will be ready in 30 minutes"
//=======================Task==================================
Доповни функцію makeMessage таким чином, щоб вона очікувала другим параметром(параметр callback) колбек - функцію і повертала результат її виклику.Функції deliverPizza або makePizza будуть передаватися як колбек для makeMessage і очікувати аргументом ім'я готової піци, що доставляється.

Оголошена функція deliverPizza
Оголошена функція makePizza
Оголошена функція makeMessage
Функція makeMessage приймає два параметри, названі відповідно до завдання, pizzaName і callback
Виклик makeMessage("Royal Grand", makePizza) повертає рядок "Pizza Royal Grand is being prepared, please wait..."
Виклик makeMessage("Ultracheese", deliverPizza) повертає рядок "Delivering Ultracheese pizza."

function deliverPizza(pizzaName) {
    return `Delivering ${pizzaName} pizza.`;
}

function makePizza(pizzaName) {
    return `Pizza ${pizzaName} is being prepared, please wait...`;
}

function makeMessage(pizzaName) {
    return;
}
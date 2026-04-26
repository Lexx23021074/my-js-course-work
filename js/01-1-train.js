const planets = ['Earth', 'Mars', 'Venus']; // масив рядків
const firstElement = planets[0];
const numbers = [1, 2, 3, 4, 5];// масив чисел
const mixed = ['apple', 10, true]; // масив з елементами різних типів

console.log(firstElement);
console.log(planets[1]);
console.log(planets[2]);
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);
console.log(mixed[0]);
console.log(mixed[1]);
console.log(mixed[2]);
console.log(mixed[3]);
console.log(mixed[999]);
console.log(planets);
planets[0] = 'Jupiter';
planets[3] = 'Neptune';
console.log(planets);
console.log(planets.length);
if (planets.length >= 4) {
    console.log("4 or more elements");
} else {
    console.log("less than 4 elements");
}
const lastElementIndex = planets.length - 1;
console.log(planets[lastElementIndex]);

/**
 * Об'єкти
 *
 * - Методи об'єкта
 * - Доступ до властивостей об'єкта через this
 * - Зміна за посиланням
 */
//!=========================================

// const arr = [1, 2, 4, 5, 1, 5];
// console.log(arr.length);
// arr.includes();
//!=========================================
// Math.PI;
// Math.E;

// Math.abs();
// Math.round();
// Math.ceil();
Math.floor();
//!=========================================

// const dog = {
//   name: 'Silver',
//   breed: 'Spaniel',
//   age: 2,

//   sayWoof() {
//     console.log('Woof woof');
//   },
//   eat() {
//     console.log('eat');
//   },
//   sleep() {
//     console.log('sleep');
//   },
// };

// console.log(dog.name);
// dog.sayWoof();

//!=========================================

// const playlist = {
//   name: 'My amazing playlist',
//   rating: 5,
//   tracks: ['track-1', 'track-2', 'track-3'],

//   changeName(newName) {
//     this.name = newName;
//   },

//   addTrack(track) {
//     this.tracks.push(track);
//   },

//   updateRating(newRating) {
//     this.rating = newRating;
//   },

//   getTrackCount() {
//     return this.tracks.length;
//   },
// };

// playlist.changeName('TEST PLAYLIST');
// playlist.addTrack('ACDC');

// console.log(playlist.getTrackCount());

// playlist.changeName("New playlist name");

// playlist.addTrack("new track 1");
// console.log(playlist.getTrackCount());

// playlist.addTrack("new track 2");
// console.log(playlist.getTrackCount());

// playlist.updateRating(4);
// console.log(playlist);
//!=========================================

// const square = {
//   width: 50,
//   height: 75,

//   getArea() {
//     return this.width * this.height;
//   },

//   getPer() {
//     return (this.width + this.height) * 2;
//   },

//   getInfo() {
//     console.log(`Width: ${this.width}`);
//     console.log(`Height: ${this.height}`);
//     console.log(`Area: ${this.getArea()}`);
//     console.log(`Per: ${this.getPer()}`);
//   },
// };

// console.log(square.getArea());
// console.log(square.getPer());

// square.getInfo();

//!=========================================

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];

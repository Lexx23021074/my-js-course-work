/**
 * Масив об'єктів
 *
 * - Перебор масива
 * - Пошук об'єкта за значенням властивості
 * - Колекція значень властивості
 */

// const friends = [
//   { name: 'Mango', online: false },
//   { name: 'Kiwi', online: true },
//   { name: 'Poly', online: false },
//   { name: 'Ajax', online: false },
// ];
//!=========================================

// for (const friend of friends) {
//   console.log(friend.name);
// }

//!=========================================

/**
 * Пошук друга за іменем
 */
// function findFriendByName(allFriends, friendName) {
//   for (const friend of allFriends) {
//     if (friend.name === friendName) {
//       return friend;
//     }
//   }
// }

// console.log(findFriendByName(friends, 'Poly'));
// console.log(findFriendByName(friends, 'Chelsy'));

//!=========================================

/**
 * Отримуємо імена всіх друзів
 */

// function getAllNames(allFriends) {
//   const res = []; // ['Mango','Kiwi', '']
//   for (const item of allFriends) {
//     res.push(item.name);
//   }
//   return res;
// }

// console.log(getAllNames(friends));

//!=========================================

/**
 * Отримуємо імена тільки тих друзів, які зараз онлайн
 */

// function getOnlineFriends(allFriends) {
//   const res = [];

//   for (const item of allFriends) {
//     if (item.online) {
//       res.push(item.name);
//     }
//   }

//   return res;
// }

// console.log(getOnlineFriends(friends));

//!=========================================
/**
 * Напишіть функцію calcTotalPrice(stones, stoneName),
 * яка приймає масив об'єктів та рядок з назвою каменю.
 * Функція рахує і повертає загальну вартість каміння з
 * таким ім'ям, ціною та кількістю з об'єкта
 */

// const stones = [
//   { name: 'Смарагд', price: 1300, quantity: 4 },
//   { name: 'Діамант', price: 2700, quantity: 3 },
//   { name: 'Сапфір', price: 400, quantity: 7 },
//   { name: 'Щебінь', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//   for (const item of stones) {
//     if (item.name === stoneName) {
//       return item.price * item.quantity;
//     }
//   }
// }

// console.log(calcTotalPrice(stones, 'Діамант'));
// console.log(calcTotalPrice(stones, 'Сапфір'));
// console.log(calcTotalPrice(stones, 'Цеглина'));

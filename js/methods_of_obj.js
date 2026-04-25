//+++++++++++Методи об'єкта+++++++++++++++
// const obj = {
//     method(value) {
//         console.log(`Method inside object   ${value}`);
//     }
// };

// obj.method(5);
// obj.method(10);
// ✅ Логічно й синтаксично згруповані сутності
// const bookShelf = {
//   books: ["The Last Kingdom", "Dream Guardian"],
//   // Це метод об'єкта
//   getBooks() {
//     return "Returning all books";
//   },
//   // Це метод об'єкта
//   addBook(bookName) {
// 		return `Adding book ${bookName}`;
//   },
// };

// // Виклики методів
// console.log(bookShelf.getBooks()); // поверне "Returning all books"
// console.log(bookShelf.addBook("New book 1")); // поверне "Adding book New book 1"
// console.log(bookShelf.addBook("New book 2")); // поверне "Adding book New book 2"
//===========================TASK======================================================

// До нас звернулася власниця крамниці зілля «У старої жаби» і замовила програму для ведення інвентарю. 
// Програма має додавати, видаляти, шукати та оновлювати зілля.

// Оголоси об'єкт atTheOldToad з наступними властивостями:

// potions — масив, де будуть зберігатися зілля. Нехай зараз він буде порожнім
// getPotions() — метод, який повертає рядок "List of all available potions"
// addPotion(potionName) — метод, який повертає рядок "Adding <potionName>", де potionName — це значення параметра potionName
// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості potions - це масив []
// Значення властивості getPotions - це метод об'єкта
// Виклик методу atTheOldToad.getPotions() повертає рядок "List of all available potions"
// Значення властивості addPotion - це метод об'єкта
// Виклик методу atTheOldToad.addPotion("Invisibility") повертає рядок "Adding Invisibility"
// Виклик методу atTheOldToad.addPotion("Power potion") повертає рядок "Adding Power potion"

// const atTheOldToad = {
//     potions: [],
//     getPotions() {
//         return "List of all available potions";
//     },
//     addPotion(potionName) {
//         return `Adding ${potionName}`;
//     },

// };
// console.log(atTheOldToad.getPotions()); // повертає рядок "List of all available potions"
// console.log(atTheOldToad.addPotion("Power potion")); // повертає рядок "Adding Power potion"
//++++++++++++++++++++++++Доступ до властивостей об'єкта+++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const bookShelf= {
//     books: ["The Last Kingdom", "The Mist"],
//     getBooks() {
//         console.log(this);
//     },
//  };
// bookShelf.getBooks();// {books: ["The Last Kingdom", "The Mist"], getBooks: f}
// Для доступу до властивостей об'єкта в методах звертаємось до нього через this і далі, стандартно, «через крапку» до властивостей.
// const bookShelf = {
//   books: ["The Last Kingdom", "The Mist"],
//   getBooks() {
//     return this.books;
//   }
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist"]
//================Завдання===========================================================
// Об'єкт atTheOldToad має наступні властивості:

// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає рядок "List of all available potions"
// Зміни код метода об'єкта getPotions() так, щоб він повертав значення властивості potions

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості potions - це масив ["Speed potion", "Stone skin"]
// Значення властивості getPotions - це метод об'єкта

// Виклик методу atTheOldToad.getPotions() повертає поточне значення властивості potions

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
// };
// console.log(atTheOldToad.getPotions());
//++++++++++++++++++++Зміна за посиланням++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const bookShelf = {
//   books: ["The Last Kingdom"],
//   getBooks() {
//     return this.books;
//   },
//   addBook(bookName) {
//     this.books.push(bookName);
//   }
// };

// console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
// bookShelf.addBook("The Mist");
// bookShelf.addBook("Dream Guardian");
// console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]
//=========================Завдання===============================================================================
// Об'єкт atTheOldToad має наступні властивості:

// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає значення властивості potions
// addPotion() — метод, який приймає параметр рядок з назвою зілля potionName
// Зміни код методу addPotion(potionName) так, щоб він додавав зілля potionName в кінець масиву у властивості potions.

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості potions - це масив ["Speed potion", "Stone skin"]
// Значення властивості getPotions - це метод об'єкта
// Значення властивості addPotion - це метод об'єкта
// Виклик методу atTheOldToad.getPotions() повертає поточне значення властивості potions
// Після виклику методу atTheOldToad.addPotion("Invisibility"), у властивості potions буде масив ["Speed potion", "Stone skin", "Invisibility"]
// Після виклику методу atTheOldToad.addPotion("Power potion"), у властивості potions буде масив["Speed potion", "Stone skin", "Invisibility", "Power potion"]

// const atTheOldToad = {
//   potions: ["Speed potion", "Stone skin"],
//   getPotions() {
//     return this.potions;
//   },
// addPotion(potionName) {
//     this.potions.push(potionName);
//  },
// };
// console.log(atTheOldToad.getPotions());
// console.log(atTheOldToad.addPotion("Invisibility"));
// console.log( atTheOldToad.addPotion("Power potion"));
//++++++++++++++++++++Масив об’єктів+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// const bookShelf = {
//   books: [
// 		{ title: "The Last Kingdom", rating: 8 }, 
// 		{ title: "The Mist", rating: 6 }
// 	],
// 	getBooks() {
// 		return this.books;
// 	}
// };
// const bookShelf = {
//   books: [
// 		{ title: "The Last Kingdom", rating: 8 }, 
// 		{ title: "The Mist", rating: 6 }
// 	],
// 	getBooks() {
// 		return this.books;
// 	}
// };
// // +++++++++++++++++++++переборі масиву 
// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
//   getAvarageRating() {
//     let totalRating = 0;

//     for (const book of this.books) {
//       totalRating += book.rating;
//     }

//     return totalRating / this.books.length;
//   },
// };

// bookShelf.getAvarageRating(); // 7
//=========================Завдання===============================================================================
// Замовниця хоче, щоб кожне зілля було представлено не тільки ім'ям, але й ціною. Тому зараз у властивості potions буде зберігатися масив об'єктів з властивостями name та price.

// Об'єкт atTheOldToad має наступні властивості:

// potions — масив рядків, з назвами зілль
// getPotions() — метод, який повертає значення властивості potions
// addPotion() — метод, який приймає параметр об'єкт нового зілля newPotion і додає його в кінець масиву у властивості potions.
// Додай метод getTotalPrice(), який має повертати загальну вартість усіх зілль з властивості potions.

// Оголошена змінна atTheOldToad +
// Значення змінної atTheOldToad - це об'єкт+
// Значення властивості atTheOldToad.getPotions - це метод об'єкта +
// Виклик методу atTheOldToad.getPotions() повертає поточне значення властивості potions+
// Значення властивості atTheOldToad.addPotion - це метод об'єкта.+
// Після виклику методу atTheOldToad.addPotion({ name: "Invisibility", price: 620 }), в масиві potions останнім елементом буде цей об'єкт
// Після виклику методу atTheOldToad.addPotion({ name: "Power potion", price: 270 }), в масиві potions останнім елементом буде цей об'єкт
// Значення властивості atTheOldToad.getTotalPrice - це метод об'єкта
// Виклик методу atTheOldToad.getTotalPrice() повертає загальну вартість усіх зілль з властивості potions


// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Stone skin", price: 520 },
//   ],
//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     this.potions.push(newPotion);
//   },
//     getTotalPrice() {
//         let total = 0;
//         for (const potion of this.potions) {
//             total += potion.price; 
//       }
//         return total;
//   },
// };
// console.log(atTheOldToad.addPotion({ name: "Invisibility", price: 620 })); 
// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));
// console.log(atTheOldToad.getTotalPrice());
//++++++++++++++++++++Зміна об'єкта в масиві++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// const bookShelf = {
//   books: [
//     { title: "The Last Kingdom", rating: 8 },
//     { title: "The Mist", rating: 6 },
//   ],
// 	changeRating(bookName, newRating) {
// 		for(const book of this.books) {
// 			if(book.title === bookName) {
// 				book.rating = newRating;
// 			}
// 		}
// 	}
// };

// console.log(changeRating("The Mist", 9));
// changeRating("The Last Kingdom", 4);
//=========================Завдання===============================================================================
// Об'єкт atTheOldToad має наступні властивості:

// potions — масив об'єктів зілль
// getPotions() — метод, який повертає значення властивості potions
// updatePotionName() — метод, який приймає два параметра рядків oldName і newName
// Доповни метод updatePotionName(oldName, newName) таким чином, щоб він оновлював назву зілля з oldName на newName в масиві зілля у властивості potions.

// Оголошена змінна atTheOldToad
// Значення змінної atTheOldToad - це об'єкт
// Значення властивості atTheOldToad.potions - це масив
// Значення властивості atTheOldToad.updatePotionName - це метод об'єкта
// Після першого виклику методу atTheOldToad.updatePotionName("Stone skin", "Invisibility"), у властивості potions буде масив [{ name: "Speed potion", price: 460 }, { name: "Invisibility", price: 520 } ]
// Після другого виклику методу atTheOldToad.updatePotionName("Speed potion", "Polymorth"), у властивості potions буде масив[{ name: "Polymorth", price: 460 }, { name: "Invisibility", price: 520 }]
const atTheOldToad = {
  potions: [
    { name: "Speed potion", price: 460 },
    { name: "Stone skin", price: 520 },
  ],
  getPotions() {
    return this.potions;
  },
  updatePotionName(oldName, newName) {
    // 1. Перебираємо масив об'єктів зілль
    for (const potion of this.potions) {
      // 2. Якщо назва поточного зілля збігається з oldName
      if (potion.name === oldName) {
        // 3. Оновлюємо назву на newName
        potion.name = newName;
        // 4. Оскільки назва унікальна, можна вийти з методу раніше
        return;
      }
    }
  },
};
// // // Задача № 32 Функция findMatches() принимает произвольное количество аргументов.
//  Первым аргументом всегда будет массив чисел, а остальные аргументы будут просто числами.

// // Дополни код функции так, чтобы она возвращала новый массив matches, 
// в котором будут только те аргументы, начиная со второго, которые есть в массиве первого аргумента.

// // Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2],
//  потому что только они есть в массиве первого аргумента.

// Change code below this line
// function findMatches(array,...otherNum) {
//   const matches = []; // Don't change this line
// for ( let num of otherNum) {
//   if (array.includes(num)) {
//     matches.push(num);
//   }
// }
//   // Change code above this line
//   return matches;
// }
// console.log(findMatches([10, 24, 41, 6, 9, 19], 24, 11, 9, 23, 41));



// Задача № 31
// Напиши функцию calculateTotalPrice(productName) которая принимает один параметр productName
//     - название товара.Функция должна вернуть общую
// стоимость(цена * количество) товара с таким именем из массива products.

// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
// let resultTotal = 0;
//   for( const product of products) {
//     const arreys = Object.values(product) 
//     for (let arrey of arreys ) {
//       if (productName === product.name) {
//           resultTotal += product.price * product.quantity
//           return resultTotal;
//       }
//     }
//   }
   
//     return 0;

//   // Пиши код выше этой строки
// }

// console.log(calculateTotalPrice("Scanner"));



// Задача № 30 написать функцию не используя метод includes , узнать есть ли в массиве array значение value


// function includes(array, value) {
//   // Change code below this line
   
//     for (const item of array) {
//         // console.log(item);
//         if ( item === value) {
//             return true;
//         }
       
//    }
//     return false;
//   // Change code above this line
// }



// console.log(includes([1, 2, 3, 4, 5], 17));
// console.log(includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter"));
// console.log(includes(["apple", "plum", "pear", "orange"], "kiwi"));



// Задача № 29 Напиши функцию getEvenNumbers(start, end) которая возвращает
//  массив всех чётных чисел от start до end.
//  Чётным считается число которое делится на 2 без остатка(10 % 2 === 0).
// function getEvenNumbers(start, end) {
//    // Change code below this line
// let newArr = [];
//     for (let i = start; i <= end; i += 1) {
       
//         if (i % 2 === 0) {
//              newArr.push(i);
//         }
    
//      }
    
//     return newArr;

//     // Change code above this line
// }
  

// console.log(getEvenNumbers(6, 12));
// console.log(getEvenNumbers(3, 11));



// Задача № 25 Напиши функцию getCommonElements(array1, array2)
// которая получает два массива произвольной длины в параметры array1 и array2,
//   и возвращает новый массив, состоящий из тех элементов,
//     которые присутствуют в обоих исходных массивах.

// function getCommonElements(array1, array2) {
//   // Change code below this line
// let newArray = [];
 
// for ( const elem1 of array1) {
//   if ( array2.includes(elem1)) {
//  	newArray.push(elem1) } }


//   return newArray;

//  // Change code above this line
// }
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]))



// Задача № 24 Узнать есть елемент в массиве (да/нет)
// function checkFruit(fruit) {
//   const fruits = ["apple", "plum", "pear", "orange"];
//   fruits.includes(fruit) ? true : false;
  
//   return fruits.includes(fruit); // Change this line
// }

// console.log(checkFruit("plum"));




// Задача № 23 Напиши функцию filterArray(numbers, value),
//  которая принимает массив чисел(параметр numbers) и возвращает новый массив,
//   в котором будут только те элементы массива numbers,
//   которые больше чем значение параметра value(число).
//   function filterArray(numbers, value) {
//     // Change code below this line

//     let newArray = [];

//     for (const number of numbers) {
//       if (number > value) {
//         newArray.push(number);
//       }
//     }
//     return newArray;
//   }
  
// // Change code above this line

// console.log(filterArray([12, 24, 8, 41, 76], 38))




//  Задача № 22 Вывести ряд целых чисел, через добавления в массив через .push
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Change code below this line
// 	for (  let i = min; i <= max; i += 1) {
//       numbers.push(i); 
//     }
//   // Change code above this line
//   return numbers;
// }

// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(1, 10));


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   {
//     title: "The Dreams in the Witch House",
//     author: "Howard Lovecraft",
//     rating: 8.67,
//   },
// ];
// const MIN_BOOK_RATING = 8;
// // Change code below this line

// const names = [...books].sort((authorA, authorB) => authorA.author.localeCompare(authorB.author))
//   .filter((book) => book.rating > MIN_BOOK_RATING)
//   .map(book => book.author);

// console.log(names);


// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male"
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female"
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male"
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female"
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male"
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman", "Adrian Cross", "Solomon Fokes"],
//     isActive: false,
//     balance: 1498,
//     gender: "male"
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female"
//   }
// ]

// const getNamesSortedByFriendCount = users => [...users].sort((friendA, friendB) => friendA.friends.length - friendB.friends.length)
//   .map(user => user.name);
   
// console.log(getNamesSortedByFriendCount(users));
// const getSortedFriends = users => users.flatMap(user => user.friends).filter((user, index, users) => users.indexOf(user) === index)
//   .sort((friendA, friendB) => friendA.localeCompare(friendB));

// console.log(getSortedFriends(users));
// ========================================================================
// Дополни функцию getTotalBalanceByGender(users, gender) так,
// чтобы она возвращала общий баланс пользователей(свойство balance),
// пол которых(свойство gender) совпадает со значением параметра gender.
// ========================================================================

// const getTotalBalanceByGender = (users, gender) => users.filter((user) => user.gender === gender)
//   .reduce((acc, user) => acc + user.balance, 0)

// console.log(getTotalBalanceByGender(users, "male"));


// Задача № 10
// class Storage {
//   constructor(items) {

//     this.items = items;
//   }
//   getItems() {
//     return this.items;
//   }
  
//   addItem(newItem) {
//     this.items.push(newItem);
//   }
//   removeItem(itemToRemove) {
//     if (this.items.includes(itemToRemove)) {
//       const index = this.items.indexOf(itemToRemove);
//       this.items.splice(index, 1);
//    }
//  }  
// }

// // Change code above this line
// const storage = new Storage(["Nanitoids", "Prolonger", "Antigravitator"]);
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator"]
// storage.addItem("Droid");
// console.log(storage.getItems()); // ["Nanitoids", "Prolonger", "Antigravitator", "Droid"]
// storage.removeItem("Prolonger");
// console.log(storage.getItems()); // ["Nanitoids", "Antigravitator", "Droid"]

// Задача №11 блок 5 ==========================================

// class StringBuilder {
//   constructor(initialValue) {
//     this.value = initialValue;
//   }
//   getValue() {
//     return this.value;
//   }
//   padEnd(str) {
//     this.value = `${this.value}${str}`;
//   }
//   padStart(str) {
//   this.value =  `${str}${this.value}`
//   }
//   padBoth(str) {
//     this.value =  `${str}${this.value}${str}`
//   }
// }


// // Change code above this line
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // "."
// builder.padStart("^");
// console.log(builder.getValue()); // "^."
// builder.padEnd("^");
// console.log(builder.getValue()); // "^.^"
// builder.padBoth("=");
// console.log(builder.getValue()); // "=^.^="
// const a = ".";
// const b = "^";
// const c = "="
// console.log(`${c}${b}${a}${b}${c}`)
// Задача № 1 

// You probably know the "like" system from Facebook and other pages.
//  People can "like" blog posts, pictures or other items.We want to create the text that should be displayed next to such an item.

// Implement the function which takes an array containing the names of people that like an
// item.It must return the display text as shown in the examples:
// []                                -->  "no one likes this"
// ["Peter"]                         -->  "Peter likes this"
// ["Jacob", "Alex"]                 -->  "Jacob and Alex like this"
// ["Max", "John", "Mark"]           -->  "Max, John and Mark like this"
// ["Alex", "Jacob", "Mark", "Max"]  -->  "Alex, Jacob and 2 others like this"
// Note: For 4 or more names, the number in "and 2 others" simply increases.

// function likes(names) {
//     // TODO
//     let message = "likes this";
//     if (names.length === 0) {
//         return `no one ${message}`
//     }
//     else if (names.length === 1) {
//         return `${[...names]} ${message}`
//     }
//     else if (names.length === 2 ) {
//     return `${names[0]} and ${names[1]} ${message.replace("likes", "like")}`
//     }
//     else if (names.length === 3) {
//         return `${names[0]}, ${names[1]} and ${names[2]} ${message.replace("likes", "like")}`
//     }
//   else if (names.length >= 4) {
//       return `${names[0]}, ${names[1]} and ${names.slice(2).length} others ${message.replace("likes","like")}`
//     }
// }



// console.log(likes([]))
// console.log(likes(["Peter"]))
// console.log(likes(["Alex", "Jacob"]))
// console.log(likes(["Max", "John", "Mark"]))
// console.log(likes(["Alex", "Jacob", "Mark", "Max"]))
// console.log(likes(["Alex", "Jacob", "Mark", "Max", "Ajax", "Kiwi", "Mango"]))
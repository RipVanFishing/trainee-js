// Задача № 2

// Given the triangle of consecutive odd numbers:

//  1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...

// Calculate the sum of the numbers in the nth row of this triangle(starting at index 1) e.g.: (Input-- > Output)

// 1 -->  1
// 2 --> 3 + 5 = 8

// function rowSumOddNumbers(n) {
// 	return Math.pow(n, 3)
// }

// console.log(rowSumOddNumbers(6))

let sum = 0;

function calculateTotal(number) {
 // Change code below this line
for( let i = 0; i <= number; i += 1) {
	
	sum += i;
	
}
	return sum;
  // Change code above this line
}

// console.log(calculateTotal(24));

console.log(calculateTotal(10));
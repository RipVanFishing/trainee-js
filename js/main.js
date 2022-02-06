function filterArray(numbers, value) {
   // Change code below this line
  const newArr = [];
for (const num of numbers) {
  if( num > value ) {
    newArr.push(num) 
  }
}
return newArr;

  // Change code above this line
}

console.log(filterArray([12, 24, 8, 41, 76], 9));
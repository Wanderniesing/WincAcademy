console.log("Array")

let selectedColors = ['green', 'blue', 'red'];
let myArray = ['greeting']
selectedColors[3] = 'yellow, 7';
console.log(selectedColors);
console.log(myArray)
myArray.push({ greeting: 'hi im a object' })
console.log(myArray)
console.log(myArray[myArray.length - 1].greeting)

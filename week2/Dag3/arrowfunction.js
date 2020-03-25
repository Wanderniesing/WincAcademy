// functie naar arrow functie

// A
const ikRockArrowFunctions = function () {
    console.log("Joe, ik rock de arrow funtions!");

};

let ikRockArrowFunctions = () => ("Joe, ik rock de arrow funtions!")
// B
const fivePlusSeven = function () {
    return 5 + 7
};

let fivePlusSeven = () => (5 + 7);
// C
document.addEventListener('click', () => console.log('click'));
// D
const myFunction = (a, b) => a + b

// E
const addFive = a => a + 5
// F
let createObject = () => let.createObject("greetings hoi")
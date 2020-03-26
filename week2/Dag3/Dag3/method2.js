// A

const superheroes = [
    { name: "Batman", alter_ego: "Bruce Wayne" },
    { name: "Superman", alter_ego: "Clark Kent" },
    { name: "Spiderman", alter_ego: "Peter Parker" }];

const findSpiderMan = (superheroesToBeFiltered) => {
    return superheroesToBeFiltered.find((superhero) => {
        return superhero.name === "Spiderman";

    });
};

console.log("Find Spiderman:", findSpiderMan(superheroes));

// B


const doubleArrayValues = function (array) {
    let newArray = [];
    array.forEach(number => {
        newArray.push(number * 2);
    });
    return newArray;
};

console.log(doubleArrayValues([1, 2, 3]));

// C
const containsNumberBiggerThan10 = (arr) => {

    return arr.some(number => {
        return number > 10;
    });
};

console.log(containsNumberBiggerThan10([1, 4, 3, 6, 9, 7, 11]));

// D

function isItalyInTheGreat7(array) {
    return array.includes("Italy");
};

console.log(isItalyInTheGreat7(['Canada', 'France', 'Germany', 'Italy', 'Japan', 'United Kingdom', 'United States']));

// E

const tenfoldMap = function (array) {
    return array.map(number => {
        return number * 10;
    });
};


console.log(tenfoldMap([1, 4, 3, 6, 9, 7, 11]));

// F

function isBelow100(arr) {
    return arr.every(number => {
        return number < 100;
    });
}


console.log(isBelow100([1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 101, 11, 77, 84, 98]))

// G

const array1 = [1, 81, 4, 53, 3, 6, 79, 2, 43, 7, 28, 11];
const array2 = [77, 84, 98, 101, 206, 234];
const reducer = (accumulator, currentValue) => accumulator + currentValue


console.log(array1.reduce(reducer));

console.log(array2.reduce(reducer));



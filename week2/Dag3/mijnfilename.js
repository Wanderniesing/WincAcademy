// A

const arrayWithWords = ["nice", "awesome", "tof"]
const addTheWorldCool = (array) => {
    array.push('cool');
    return (array)
}
console.log("Add cool:", addTheWorldCool(["nice", "awesome", "tof"]));

// B

const amountOfElementsInArray = (arr) => {
    return arr.length;
}

console.log(amountOfElementsInArray(['appels', 'peren', 'citroenen']));


// aanmaken van sum functie
const sum = (x, y) => {

    return x + y
}
// uitvoor van sum functie
const test2 = sum(20, 40);
const test = sum(40, 60);
console.log(test);
console.log(test2);

// C

const selectBelgiumFromBenelux = (arr) => {
    return arr[0];

};
console.log(selectBelgiumFromBenelux(['belgie', 'Nederland', 'Luxemburg']));


// D

const lastElementInArray = (arr) => {
    return arr.pop();

};

const lastElementInArray2 = (array) => {
    return array[array.lenght - 1];
};
console.log(lastElementInArray(["Haas", "Cavia", "Kip", "Schildpad"]));

// E

const presidents = ["Trump", "Obama", "Bush", "Clinton"]

const impeachTrumpSlice = (arr) => {
    const newArr = arr.slice(1, 4);
    console.log("Nieuwe array:", newArr, arr);
    return newArr;

};

const impeachTrumpSplice = (arr) => {
    const removedElement = arr.splice(0, 1);
    console.log(
        "removed:",
        removedElement,
        "Trump is missing:",
        arr
    );
    return arr;
};

console.log(impeachTrumpSlice(presidents));
console.log(impeachTrumpSplice(presidents));

// F

const stringsTogether = (array) => {
    return array.join("toghter");
};

console.log(stringsTogether(['Winc', 'Academy', 'is', 'leuk', ';-}']))

// G

const combineArrays = (arr1, arr2) => {

    return arr1.concat(arr2);
}

console.log(combineArrays([1, 2, 3], [4, 5, 6])); 

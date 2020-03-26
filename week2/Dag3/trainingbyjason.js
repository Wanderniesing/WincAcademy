// requirement: schrijf een functie die een product kan vinden op basis van de gegeven naam
// [] = array
// {} = object
// "" = string
// 10 = number

// productdata (een array van objects):
const products = [
    {
        name: "Pants",
        price: 40.15
    },
    {
        name: "Trousers",
        price: 14
    },
    {
        name: "T-Shirt",
        price: 10.15
    }
];

// declaratie van de functie
function findProductByName(name) {
    return products.find(p => p.name === name);
}

// uitvoer van de functie
console.log(findProductByName("Pants"));
console.log(findProductByName("Trousers"));
console.log(findProductByName("T-Shirt"));
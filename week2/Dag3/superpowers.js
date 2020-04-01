

const superheroes =
    [
        { name: "Batman", publisher: "DC Comics", alter_ego: "Bruce Wayne", first_appearance: "Detective Comics #27", weight: "210" },
        { name: "Superman", publisher: "DC Comics", alter_ego: "Kal-El", first_appearance: "Action Comics #1", weight: "220" },
        { name: "Flash", publisher: "DC Comics", alter_ego: "Jay Garrick", first_appearance: "Flash Comics #1", weight: "195" },
        { name: "Green Lantern", publisher: "DC Comics", alter_ego: "Alan Scott", first_appearance: "All-American Comics #16", weight: "186" },
        { name: "Green Arrow", publisher: "DC Comics", alter_ego: "Oliver Queen", first_appearance: "All-American Comics #16", weight: "195" },
        { name: "Wonder Woman", publisher: "DC Comics", alter_ego: "Princess Diana", first_appearance: "The Incredible Hulk #180", weight: "165" },
        { name: "Blue Beetle", publisher: "DC Comics", alter_ego: "Dan Garret", first_appearance: "Mystery Men Comics #1", weight: "145" },
        { name: "Spider Man", publisher: "Marvel Comics", alter_ego: "Peter Parker", first_appearance: "Amazing Fantasy #15", weight: "167" },
        { name: "Captain America", publisher: "Marvel Comics", alter_ego: "Steve Rogers", first_appearance: "Captain America Comics #1", weight: "220" },
        { name: "Iron Man", publisher: "Marvel Comics", alter_ego: "Tony Stark", first_appearance: "Tales of Suspense #39", weight: "250" },
        { name: "Thor", publisher: "Marvel Comics", alter_ego: "Thor Odinson", first_appearance: "Journey into Myster #83", weight: "200" },
        { name: "Hulk", publisher: "Marvel Comics", alter_ego: "Bruce Banner", first_appearance: "The Incredible Hulk #1", weight: "1400" },
        { name: "Wolverine", publisher: "Marvel Comics", alter_ego: "James Howlett", first_appearance: "The Incredible Hulk #180", weight: "200" },
        { name: "Daredevil", publisher: "Marvel Comics", alter_ego: "Matthew Michael Murdock", first_appearance: "Daredevil #1", weight: "200" },
        { name: "Silver Surfer", publisher: "Marvel Comics", alter_ego: "Norrin Radd", first_appearance: "The Fantastic Four #48", weight: "unknown" }]





// const superNames = superheroes.map(function (superheroes) {
//     return superNames.name

// });

// const superhero = superNames.filter(superName => superName.name === "");

console.log(superheroes)
// const weightNumbers = [145, 165, 167, 186, 195, 200, 210, 220, 250, 1400, "unkown"]
const superheroesWeight = [];



const findName = (namesToBeFiltered) => {
    return namesToBeFiltered.filter((superhero) => {
        return superhero.name = ["Batman",
            "Superman",
            "Flash",
            "Green Lantern",
            "Green Arrow",
            "Wonder Woman",
            "Blue Beetle",
            "Spider Man",
            "Captain America",
            "Iron Man",
            "Thor",
            "Hulk",
            "Wolverine",
            "Daredevil",
            "Silver Surfer"];

    });
};

console.log(findName(superheroes));

const containsNumber = (weightNumber) => {

    return weightNumber.filter(numbers => {
        return numbers = 200;
    });
};

console.log(containsNumber([145, 165, 167, 186, 195, 200, 210, 220, 250, 1400,]));



const weight = [210, 220, 195, 186, 195, 165, 145];
const weight2 = [167, 220, 250, 200, 1400, 200, 200];
const reducer = (accumulator, currentValue) => accumulator + currentValue


console.log(weight.reduce(reducer));
console.log(weight2.reduce(reducer));


// superheroesWeight = superheroes.map(function (superhero) {
//     return superhero.weight
// });



// superheroes.map(weightNumbers => {
//     return [weightNumbers]
// }).filter(name => {
//     return [name]
// })

const filteredSuperheroes = superheroes.filter((superheroes) => {
    return superheroes.weight <= 190

})

console.log(filteredSuperheroes)

const superheroesNames = superheroes.map((superhero) => {
    return superhero.name
})
const superheroesWeight1 = superheroes.map((superhero) => {

    return superhero.weight = 200
})

console.log(superheroesNames)
console.log(superheroesWeight1)

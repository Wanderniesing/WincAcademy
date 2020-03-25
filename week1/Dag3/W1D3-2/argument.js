console.log("functies en argument")

// Hier kan ik geen function call neerzetten "makeSandwich('nutella')"
// Omdat JavaScript de functie nog niet kent.

// Hier declareer ik mijn functie
const makeSandwich = function (topping) {
    console.log("Put butter on sandwich");
    console.log("Add " + topping + " to sandwich");
    console.log("Eat the sandwich");
    console.log("There you go, a sandwich with " + topping);
};


makeSandwich('pindakaas');
makeSandwich('hageslag');
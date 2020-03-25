let d = document.write();
alert("WELCOME TO THE GAME ");


// begroeting
// naam
// welkom text
// math.random
// prompt
// alert fout/goed
// afsluiting
var element = document.documentElement;


var UserNumber = 25;
var counter = 1;
var MaxTries = 5;

var RandomNumber = Math.floor(Math.random() * UserNumber) + 1;

while (Attempts !== RandomNumber) {

    var Attempts = prompt("pick a number 0 and" + UserNumber);
    counter += 1;

    if (counter > MaxTries) {
        document.write("No More Tries press F5 to play again");
        break
    }

    if (Attempts == RandomNumber) {
        document.write("You've got the right number");
        document.write("<p> The right number was" + RandomNumber + "</P>");
        document.write("<p> It Took You " + counter + " Attempts To Get The Correct Number</P>");



    }
}
console.log(document.write);


// BONUS
// max 5 keer
// elke x en bericht
// range bepalen
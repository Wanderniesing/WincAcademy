console.log("life")

function calculateSupply(age, numPerDay) {
    var maxAge = 70;
    var totalNeeded = (numPerDay * 365) * (maxAge - age);
    var message = 'You will need ' + totalNeeded + ' bottles of water until the ripe old age of ' + maxAge;
    console.log(message);
}

calculateSupply(21, 39);
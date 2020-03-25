console.log("return")

const calculateDiscountprice = function (totalAmount, discount) {
    return Math.round(totalAmount - discount);


}
const calculateDiscountpriceRecall = function (totalAmount, discount) {
    if (totalAmount > 25) {
        return Math.round(totalAmount - discount);

    } else {
        return totalAmount;

    }

}

console.log(calculateDiscountprice(100, 25));
console.log(calculateDiscountprice(50, 25));


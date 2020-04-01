const optellen = function(...args) {
  return args.reduce((acc, item) => {
    return acc + item;
  });
};

console.log(optellen(4, 5, 6, 7, 8, 9));

const sum = function(num1, num2, num3) {
  return num1 + num2 + num3;
};

const cijfers = [4, 5, 6];

console.log(sum(...cijfers));

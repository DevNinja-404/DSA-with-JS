// WAP to reverse a integer value

const reverseInteger = (integer) =>
  parseInt(integer.toString().split("").reverse().join("")) *
  Math.sign(integer);

console.log(reverseInteger(-1234));
console.log(reverseInteger(1234));

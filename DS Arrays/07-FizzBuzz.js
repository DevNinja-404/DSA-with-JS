/* FizzBuzz :
1. Print numbers from 1 to n
2. If number is divisible by 3 ,print "Fizz" 
3. If number is divisible by 5 , print "Buzz"
4. If number is divisible by 3 and 5 , porint "FizzBuzz"
5. Else,Print the number
*/

const fizzBuzz = (n) => {
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      console.log(`${i} FizzBuzz`);
    } else if (i % 3 == 0) {
      console.log(`${i} Fizz`);
    } else if (i % 5 == 0) {
      console.log(`${i} Buzz`);
    } else {
      console.log(`${i}`);
    }
  }
};
fizzBuzz(3);
console.log("----------");
fizzBuzz(20);
console.log("----------");
fizzBuzz(15);

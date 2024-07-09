/* Imagine you have a list of numbers and a target number. Your job is to find two numbers in that list that add upto the target number.You also need to tell which positions (or indexes) those two numbers are at in the list.

Example : if the list is [2,7,11,15] and the target is 9 , then the answer would be [0,1] because 2(at index 0) plus 7(at index 1) equals 9.

*/

const findTwoSum = (numList, target) => {
  for (let i = 0; i < numList.length; i++) {
    for (let j = i + 1; j < numList.length; j++) {
      if (numList[i] + numList[j] === target) {
        return {
          num1: { number: numList[i], index: i },
          num2: { number: numList[j], index: j },
        };
      }
    }
  }
  return "No Two Numbers Adds up to the target Number";
};

console.log(findTwoSum([2, 7, 11, 15], 9));
console.log("--------------");
console.log(findTwoSum([2, 3, 5, 7], 9));
console.log("--------------");
console.log(findTwoSum([2, 15, 20, 5, 7, 8, 9], 22));
console.log("--------------");
console.log(findTwoSum([2, 15, 20, 5, 7, 8, 9], 102));

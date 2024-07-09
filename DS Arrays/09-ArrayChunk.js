/* Write a function that takes an array and a chunnk size as input.The Function should return a new array where the original array is split into the chunks of the specified array.

chunk([1,2,3,4,5,6,7,8,9],3)  => [[1,2,3],[4,5,6],[7,8,9]]
chunk([1,2,3,4,5,],2)  => [[1,2],[3,4],[5]]

*/

// How I approached it which obviously isn't better😭😭

// const chunk = (arr, chunkSize) => {
//   const result = [];
//   let sliceStart = 0;
//   let sliceEnd = chunkSize;

//   for (i = 0; i < arr.length; i++) {
//     if (i === sliceEnd - 1 || i === arr.length - 1) {
//       result.push(arr.slice(sliceStart, sliceEnd));
//       sliceStart += chunkSize;
//       sliceEnd += chunkSize;
//     }
//   }

//   return result;
// };
// console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
// console.log(chunk([1, 2, 3], 3));
// console.log(chunk([1, 2, 3], 2));

// How HuXn Did it :
const chunk = (array, size) => {
  const chunkedArray = [];
  let index = 0;

  while (index < array.length) {
    const chunk = array.slice(index, index + size);
    // console.log("######", chunk);
    chunkedArray.push(chunk);
    index += size;
  }
  return chunkedArray;
};

console.log(chunk([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(chunk([1, 2, 3], 3));
console.log(chunk([1, 2, 3], 2));

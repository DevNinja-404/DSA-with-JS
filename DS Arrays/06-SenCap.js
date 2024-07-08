// WAP to capitalize the given sentence :
// Example : i am a boyu => I Am A Boy

// How I approached the problem :
// const capitalizeSentence = (sentence) =>
//   sentence
//     .toLowerCase()
//     .split(" ") //['i','am','a','boy']
//     .map((word) =>
//       word
//         .split("") // ['i'] , ['a','m'] , ['a'] , ['b','o','y']
//         .map((eachLetter, index) => {
//           return index === 0 ? eachLetter.toUpperCase() : eachLetter;
//         })
//         .join("")
//     )
//     .join(" ");

// console.log(capitalizeSentence("i am a boy"));
// console.log(capitalizeSentence("english or spanish"));

// Basically forgot about the slice Method..

// Method: slice(begin, end)
// Functionality: Extracts a section of an array or string and returns it as a new array or string.
// Non-destructive: Does not modify the original array or string.

// Indices:
// begin: Start index for extraction.
// end: End index (not included in the extraction).
// Negative indices can be used to count from the end of the array or string.
// No index will return a shallow copy of the entire array

const capitalizeSentence = (sentence) =>
  sentence
    .toLowerCase()
    .split(" ") //['i','am','a','boy']
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");

console.log(capitalizeSentence("i am a boy"));
console.log(capitalizeSentence("english or spanish"));

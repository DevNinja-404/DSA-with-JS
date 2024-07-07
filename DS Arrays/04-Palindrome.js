// WAP to check whether the given string is palindrome or not?

// Basically a string is said to palindrome if the reverse of it is same as its original self
// cddc -> cddc
// abba -> abba

const checkPalindrome = (str) =>
  str.split("").reverse().join("") === str
    ? `${str} is Palindrome`
    : `${str} is not Palindrome`;

console.log(checkPalindrome("abc"));

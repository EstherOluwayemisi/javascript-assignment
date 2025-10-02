// 1. Fine the largest Number: Given [2, 8, 5, 1],return the largest number.
let arr = [2, 8, 5, 1]
let largest = [0]
for (let i = 1; i< arr.length; i++){
    if(arr[i] > largest){
        largest = arr[i]
    }
}
console.log(largest)

// 2. Print number 1-20.For multiples of 3 print "Fizz",for 5 print "Buzz",
// both print "FizzBuzz" 
for (let i = 1; i <= 20; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// 3. check if a word like "racecar" is the same when reversed
function isPalindrome(word) {
  let reversed = word.split("").reverse().join("");
  if (word === reversed) {
    console.log(word + " is a palindrome");
  } else {
    console.log(word + " is not a palindrome");
  }
}
isPalindrome("racecar"); 
isPalindrome("hello"); 

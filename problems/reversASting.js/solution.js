//Create a function that takes a string and returns that string backwards
//Input: "Cat"
//Output: "taC"

//Solution using .split and .reduce
const reverseString = string => string.split('').reduce((x,y)=> x=y+x);

console.log(reverseString('cat'));
console.log(reverseString('Michael Jordan'));
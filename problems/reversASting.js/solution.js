//Create a function that takes a string and returns that string backwards
//Input: "Cat"
//Output: "taC"

//Solution using .split and .reduce. single line
const reverseString = string => string.split('').reduce((x,y)=> x=y+x);

//Solution with .split and a for loop and .join
const reverseString2 = string => {
    stringArray = string.split('');
    backwardArray = [];

    for (var i = 0; i < stringArray.length; i++) {
        backwardArray.unshift(stringArray[i]);
    };

    return backwardArray.join('');
};

console.log(reverseString2('Cat'));
console.log(reverseString2('Michael Jordan'));
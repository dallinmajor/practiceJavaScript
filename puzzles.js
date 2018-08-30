//function that takes an array of numbers and returns the index of the hightest number

const numbers = [1,5,4,3,8,9,4,3];
const numbers2 = [1,3,2];

//made easy using ES6 methods .indesOf and Math.max
const findIndex = arr => {
    return arr.indexOf(Math.max(...numbers));
};

//using .indexOf and .reduce
const findIndex2 = numbers => {
    return numbers.indexOf(
        numbers.reduce((x, y) => x = x>y?x:y)
    )
};

//using .indexOf and for loop
const findIndex3 = numbers => {

    let highNum = 0;

    for (var i = 0; i < numbers.length; i++) {

        highNum = highNum > numbers[i] ? highNum : numbers[i];
      
    }

    return numbers.indexOf(highNum);
}

// no JS methods, just good old faction for loop and variables
const findIndex4 = numbers => {
    let highNum = 0;
    let index = 0;
    for (var i = 0; i < numbers.length; i++) {
        
        if (highNum < numbers[i]) {
            highNum = numbers[i];
            index = i;
        }
    }

    return index;
}

// Test these functions
// console.log(findIndex4(numbers));
// console.log(findIndex4(numbers2));





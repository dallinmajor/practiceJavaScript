//Problem
//function that takes an array of numbers and returns the index of the hightest number


//Solution #1 made easy using ES6 methods .indesOf and Math.max
const findIndex = numbers => {
    return numbers.indexOf(Math.max(...numbers));
};

//Solution #2 using .indexOf and .reduce
const findIndex2 = numbers => {
    return numbers.indexOf(
        numbers.reduce((x, y) => x = x>y?x:y)
    )
};

//Solution #3 using .indexOf and for loop
const findIndex3 = numbers => {

    let highNum = 0;

    for (var i = 0; i < numbers.length; i++) {

        highNum = highNum > numbers[i] ? highNum : numbers[i];
      
    }
    return numbers.indexOf(highNum);
}

//Solution # 4no JS methods, just good old factioned for loop and variables
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
};

console.log(findIndex([1,2,3]));
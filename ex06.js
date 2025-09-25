// Every Exercise
// Instructions: Create an array of at least five numbers. 
// Write code to check if every number in the array is positive.

const numbers = [8, 4, -22, 10, 30];

const positiveNumber = (number) => {
    if (number > 0){
        return true;
    }
}

console.log(numbers.every(positiveNumber));
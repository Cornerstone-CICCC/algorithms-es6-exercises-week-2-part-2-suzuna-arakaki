// Find Exercise
// Instructions: Create an array of at least five numbers. 
// Write code to find the first element that is greater than 10.

const numbers = [8, 4, 22, 10, 30];

const firstNumber = numbers.find((number) => {
    return number > 10;
});

console.log(firstNumber);
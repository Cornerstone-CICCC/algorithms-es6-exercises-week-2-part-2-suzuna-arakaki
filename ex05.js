// Some Exercise
// Instructions: Create an array of at least five numbers. 
// Write code to check if some of the numbers are even.

const numbers = [8, 4, 22, 10, 30];

const evenNumber = (number) => {
    return number % 2 === 0;
}
console.log(numbers.some(evenNumber));
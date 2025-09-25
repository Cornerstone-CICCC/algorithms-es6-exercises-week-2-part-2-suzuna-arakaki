// Sort Exercise
// Instructions: Create an array of at least five numbers in random order. 
// Write the code to sort this array in ascending order.

const numbers = [8, 4, 22, 10, 30];

function comparatorFunction(a, b){
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
}

numbers.sort(comparatorFunction);
console.log(numbers);
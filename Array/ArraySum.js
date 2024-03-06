//Q.1> sum of an array by using function which returns sum of all elements
//arr.reduce(accumulator, value) method reduce the array to a single value and executes a provided function
//for each value of the array and the return value of the function is stored in accumulator.

const arr = [8, 7, 9, 4, 5, 6];

const total = arr.reduce(sum, 0);

function sum(accumulator, value) {
    return accumulator + value;
}
console.log(total);

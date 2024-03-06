//Q.2 > Implement a function that reverses an array without using the built-in reverse method

//map(item, index) method creates an array by calling specific function on each element present in the parent array.
//item: Holds the value of the current element
//index: Holds the index of the current element


let array = [19, 28, 31, 43, 57];

console.log("Original Array: ");
console.log(array);

reverse_array = array.map((item, index) => array[array.length - 1 - index])

console.log("Reversed Array: ");
console.log(reverse_array);

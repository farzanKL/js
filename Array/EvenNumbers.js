//Q.4> Create a function that takes an array of numbers and returns a new array containing only the even numbers.

function num(elements) {
    // const elements = [2, 3, 4, 5, 6, 7, 8, 9];
    const evenElement = [];
    elements.forEach(function (element) {
        if (element % 2 == 0) {
            evenElement.push(element);
        }
    });
    console.log(evenElement);
}
num([12, 13, 14, 15, 16, 17, 18, 19]);
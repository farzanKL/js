//Q.3> Write a function that checks if a certain element exists in an array.

//array.includes(searchElement, start): returns true if an array contains a specified value.
//SearchElement: Holds the elements that will be searched
//start: Holds the starting point of the array, where to begin the search the default value is 0.

const arr = [78, 98, 67, 55, 66];
const checkElement = (searchElement) => {
    var start = 0;
    exist = arr.includes(searchElement, start);
    indexNumber = exist && arr.indexOf(searchElement);

    if (exist) {
        console.log("Element found");
        console.log("Index No. Is: ", indexNumber);
    } else {
        console.log("Element not found");
    }
}

checkElement(66);


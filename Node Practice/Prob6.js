//Q.14} Write a Promise-based function that performs operations on two arrays provided in a JSON payload.
//Q.15} The JSON payload should include two arrays, and the function should resolve with the result of various operations,
//such as finding the intersection, union, and difference of the arrays. 


function arrayOperations(payload) {
    return new Promise((resolve, reject) => {
        if (!payload || !payload.array1 || !payload.array2) {
            reject("Invalid payload. Please provide two arrays in the payload.");
        } else {
            const array1 = payload.array1;
            const array2 = payload.array2;

            const intersection = array1.filter(value => array2.includes(value));
            const union = Array.from(new Set([...array1, ...array2]));
            const difference = array1.filter(value => !array2.includes(value));

            const result = {
                intersection: intersection,
                union: union,
                difference: difference
            };

            resolve(result);
        }
    });
}

const payload = {
    array1: [1, 2, 3, 4, 5],
    array2: [3, 4, 5, 6, 7]
};

arrayOperations(payload)
    .then(result => {
        console.log("Intersection:", result.intersection);
        console.log("Union:", result.union);
        console.log("Difference:", result.difference);
    })
    .catch(error => {
        console.error("Error:", error);
    });
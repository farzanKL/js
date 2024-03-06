//Q.12} Write a Promise-based function that calculates the area and perimeter of a circle given its radius.
//Q.13} The function should take the radius as input and resolve with an object containing both the area and perimeter.

function calculateCircleProperties(radius) {
    return new Promise((resolve, reject) => {
        if (typeof radius !== 'number' || radius <= 0) {
            reject(new Error('Radius must be a positive number'));
        } else {
            const area = Math.PI * radius * radius;
            const perimeter = 2 * Math.PI * radius;
            resolve({ area, perimeter });
        }
    });
}

calculateCircleProperties(5)
    .then(circleProperties => {
        console.log('Area:', circleProperties.area);
        console.log('Perimeter:', circleProperties.perimeter);
    })
    .catch(error => {
        console.error('Error:', error.message);
    });
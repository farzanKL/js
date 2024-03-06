//Q.9} Create a Promise function that accepts an array of objects with a 'price' property (a number).
//Q.10} The function should return a Promise that resolves with the array of objects.
//Q.11} A new property 'discountedPrice' added, which is 43% of the original price. 



// [

//     { "item_name": "Item 1", "price": 36 },

//     { "item_name": "Item 2", "price": 35 },

//     { "item_name": "Item 3", "price": 40 },

//     { "item_name": "Item 4", "price": 45 },

//     { "item_name": "Item 5", "price": 32 }

// ];


const items = [
    { "item_name": "Item 1", "price": 36 },
    { "item_name": "Item 2", "price": 35 },
    { "item_name": "Item 3", "price": 40 },
    { "item_name": "Item 4", "price": 45 },
    { "item_name": "Item 5", "price": 32 }
];

function calculateDiscountedPrices(items) {
    return new Promise((resolve, reject) => {
        if (!Array.isArray(items)) {
            reject(new Error('Input is not an array.'));
        } else {
            const itemsWithDiscount = items.map(item => {
                const discountedPrice = item.price * 0.43;
                return { ...item, discountedPrice };
            });
            resolve(itemsWithDiscount);
        }
    });
}


calculateDiscountedPrices(items)
    .then(result => {
        console.log(result);
    })
    .catch(error => {
        console.error(error);
    });
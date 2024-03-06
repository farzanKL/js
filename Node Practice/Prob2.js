//Q.4} Use the reduce function to find the total amount of all transactions.

const transactions = [

    { "amount": 50.00 },

    { "amount": 30.50 },

    { "amount": 75.20 },

    { "amount": 40.80 },

    { "amount": 120.45 },

];

const totalAmount = transactions.reduce((accumulator, currentTransaction) => {
    return accumulator + currentTransaction.amount;
}, 0);

console.log("total amount:", totalAmount.toFixed(2));

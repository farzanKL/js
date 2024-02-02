//Promises are the new way to handle Async operation in JS.
//Due to callback, two issues developer was facing, one is callbackHell and other is Inversion of Control.
//In this code below, By the concept of promises chaining to avoid callbackHell,One can manage the multiple Api request or Multiple events by using
//.then to get the value of a callback function and by using "return" keyword we can also get rid of inversion control, by giving the access
//back to the callback function sequentially by attaching one function to another function rather passing function within another function.

const cart = ["shoes", "pants", "Kurta"];

createOrder(cart, function (orderId) {
    proceedToPayment(orderId, function (paymentInfo) {
        showOrderSummary(paymentInfo, function () {
            updateWalletBalance();
        });
    });
});

const promise = createOrder(cart);

promise.then(function (orderId) {
    return proceedToPayment(orderId);
})
    .then(function (paymentInfo) {
        return showOrderSummary(paymentInfo);
    })
    .then(function (paymentInfo) {
        return updateWalletBalance(paymentInfo);
    });



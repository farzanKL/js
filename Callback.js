//Callback function:Passing a function into another function.
//Callback comes to deal with the asynchronous programming In JS

setTimeout(function () {
    console.log("timer");
}, 5000);

function x(y) {
    console.log("x");
    y();
}
x(function y() {  // callback function
    console.log("y");
});
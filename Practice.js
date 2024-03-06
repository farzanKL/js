//Using function returning promise object

const promise = new Promise(function Job(resolve, reject) {
    setTimeout(() => {
        console.log("Kiba Labs");
    }, 2000)
})

promise.then((resolve) => {
    console.log("Executed");
})

//Multiple call backs

const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Kiba Labs');
    }, 2000);
});

promise.then(function (data) {
    console.log(data + ' 1');
});

promise.then(function (data) {
    console.log(data + ' 2');
});

promise.then(function (data) {
    console.log(data + ' 3');
});

//When an Error happens

const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject('We are all going to die');
    }, 2000);
});

promise.then(function success(data) {
    console.log(data);
}, function error(data) {
    console.error(data);
});

//When an error occurs with multiple callbacks

const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        reject('Emerging into AI');
    }, 2000);
});

promise.then(function success(data) {
    console.log(data + ' 1');
}, function error(data) {
    console.error(data + ' 1');
});

promise.then(function success(data) {
    console.log(data + ' 2');
}, function error(data) {
    console.error(data + ' 2');
});

promise.then(function success(data) {
    console.log(data + ' 3');
}, function error(data) {
    console.error(data + ' 3');
});

//Calling resolve multiple times

const promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve('Kiba Labs 1');
        resolve('Kiba Labs 2');
        resolve('Kiba Labs 3');
        resolve('Kiba Labs 4');
    }, 1000);
});

promise.then(function success(data) {
    console.log(data);
});
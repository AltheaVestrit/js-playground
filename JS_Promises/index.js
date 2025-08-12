const promiseOne = new Promise((resolve, reject) => {
    resolve("Promise 1 resolved");
});

const promiseTwo = new Promise((resolve, reject) => {
    resolve("Promise 2 resolved");
});

const promiseThree = new Promise((resolve, reject) => {
    resolve("Promise 3 resolved");
});

// Check one promise
promiseOne
    .then(message => {
        console.log(message);
    })
    .catch(errMessage => {
        console.log(errMessage);
    });

// Check multiple promises, resolve when all promises are resolved
Promise.all([
    promiseOne,
    promiseTwo,
    promiseThree
]).then((messages) => {
    console.log(messages);
});

// Check multiple promises, but resolve when one promise is resolved
Promise.race([
    promiseTwo,
    promiseOne,
    promiseThree
]).then((message) => {
  console.log(message);
});
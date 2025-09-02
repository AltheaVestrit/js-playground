const promiseOne = new Promise((resolve, reject) => {
  resolve("Promise 1 resolved");
});

const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Promise 2 resolved"), 100);
})

const promiseThree = new Promise((resolve, reject) => {
  reject("Promise 3 rejected");
});

// Check one promise
promiseOne
  .then((message) => {
    console.log(message);
  })
  .catch((errMessage) => {
    console.log(errMessage);
  });

// Check multiple promises, resolve when all promises are resolved
Promise.all([promiseOne, promiseTwo, promiseThree])
  .then((messages) => {
    console.log("[Promise.all] Promises executed:", messages);
  })
  .catch((message) => console.log("[Promise.all] Promises executed:", message));

// Check multiple promises, but return when one of the promises comes back
Promise.race([promiseTwo, promiseOne, promiseThree])
  .then((message) => {
    console.log("[Promise.race] Promises executed:", message);
  })
  .catch((message) =>
    console.log("[Promise.race] Promises executed:", message)
  );
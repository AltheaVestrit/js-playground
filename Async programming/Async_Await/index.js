const server = {
  people: [
    {
      name: "Odin",
      age: 20,
    },
    {
      name: "Thor",
      age: 35,
    },
    {
      name: "Freyja",
      age: 29,
    },
  ],

  getPeople() {
    return new Promise((resolve, reject) => {
      // Simulating a delayed network call to the server
      setTimeout(() => {
        resolve(this.people);
      }, 2000);
    });
  },
};

async function getPersonsInfo(name) {
  const people = await server.getPeople();
  console.log("<<< getPersonsInfo >>>")
  const person = people.find((person) => {
    return person.name === name;
  });
  nonExistingFunction(); // This function does not exist, so async function will throw an error
  return person;
}

getPersonsInfo("Thor")
  .then((response) => console.log(response))
  .catch(() => {
    console.log("An error occurred");
  });

//   Async functions:
//    return a promise
//      * returning in an async function is the same as resolving a promise
//      * throwing an error is the same as rejecting a promise


// Catch errors in async function, so you don't have to append .catch to function call
async function getPersonsInfoAndCatchErrors(name) {
  try {
    const people = await server.getPeople();
    console.log("<<< getPersonsInfoAndCatchErrors >>>");
    const person = people.find((person) => {
      return person.name === name;
    });
    nonExistingFunction();
    return person;
  } catch (error) {
    return "An error occured";
  }
}

getPersonsInfoAndCatchErrors("Thor").then(response => console.log(response));
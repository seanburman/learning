//SIMPLE PROMISES WITH FETCH

// console.log(fetch("https://api.randomuser.me/?nat=US&results=1"));

// fetch("https://api.randomuser.me/?nat=US&results=1").then(res =>
// console.log(res.json())
// );

// fetch("https://api.randomuser.me/?nat=US&results=1")
// .then(res => res.json())
// .then(json => json.results)
// .then(console.log)
// .catch(console.error);

// //////////////////////////////

// //ASYNC / WAIT

// P.70 Returning functions from functions
// const createScream = function(logger) {
//     return function(message) {
//     logger(message.toUpperCase() + "!!!");
//     };
//     };
// const scream = createScream(message => console.log(message));
// scream("functions can be returned from other functions");
// scream("createScream returns a function");
// scream("scream invokes that returned function");
// console.log(scream)

// P.79 Pure Functions
const frederick = {
    name: "Frederick Douglass",
    canRead: false,
    canWrite: false
    };
    const selfEducate = person => ({
    ...person,
    canRead: true,
    canWrite: true
    });
    // console.log(selfEducate(frederick));
    // console.log(frederick);

    testFred = selfEducate(frederick);
    console.log(testFred)


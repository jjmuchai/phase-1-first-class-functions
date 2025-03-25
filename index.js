// Function that receives a callback and calls it
function receivesAFunction(callback) {
    callback();
}

// Function that returns a named function
function returnsANamedFunction() {
    function namedFunction() {
        console.log("I am a named function!");
    }
    return namedFunction;
}

// Function that returns an anonymous function
function returnsAnAnonymousFunction() {
    return function() {
        console.log("I am an anonymous function!");
    };
}

// Example test calls (optional)
receivesAFunction(() => console.log("Callback called!"));

const namedFn = returnsANamedFunction();
console.log(namedFn.name); // Should print "namedFunction"

const anonFn = returnsAnAnonymousFunction();
console.log(anonFn.name); // Should print an empty string ""

const hello = Promise.resolve("Hello Robin");
hello.then(result => console.log(result)); // Result is the callback function here
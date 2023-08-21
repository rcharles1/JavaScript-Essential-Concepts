// ---- Meta Programming with JavaScript(ES6) ----
// Metaprogramming is a programming technique in which computer programs have the ability
// to treat other programs as their data.

// ---- PROXY ----
// Proxy raps objects and intercepts their behaviour throguh traps
// --Syntax--
// let p = new Proxy(target, handler);

// ---- KEY TERMS ----
// The target: an Object which the proxy virtualizes. ( FOR THIS CASE THE 'employee' OBJECT)
// The handler: a Placeholder Object which contains traps.
// The trap: the Methods that provide property access of the target object.

// Employee Object
const employee = { firstName: 'Abcd', lastName: 'Xyz'
};

// Creating a Handler that uses a get Trap
let handler = { get: function(target, fieldName) { if(fieldName === 'fullName' ) { 
        return `${target.firstName} ${target.lastName}`;
        } return fieldName in target ? target[fieldName] : `No such property as, '${fieldName}'!`
    }
};

// creating Proxy Object
let proxy = new Proxy(employee, handler);

// Accessing properties in the Proxy Object
console.group('PROXY'); 
console.log(proxy.firstName); 
console.log(proxy.lastName); 
console.log(proxy.org); // this shall result into an error as there's no
console.log(proxy.fullName);
console.groupEnd()


// ---- Reflection APIs ----
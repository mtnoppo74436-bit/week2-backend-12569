"use strict";
const user = {
    name: "Alice",
    age: 30
};
console.log(user); // Output: {name: "Alice", age: 30 }
console.log(`hello, ${user.name}! You are ${user.age} years old.`); // Output: Hello, Alice! You are 30 years
function greet(user) {
    return `Hello,${user.name}! You are ${user.age} years old.`;
}
console.log(greet(user)); // Output: Hello, Alice! You are 30 years old.
console.log(JSON.stringify(user, null, 2)); // Output: {"name"::"Alice","age":30}

const user: { name: string; age: number } = {
    name: "Alice",
    age: 30
};
console.log(user.name); // Output: Alice
console.log(user.age);  // Output: 30
console.log(user);      // Output: {name:'Alice',age: 30}
console.log(typeof user);// Output: object
console.log(`User's name is ${user.name}and age is ${user.age}.`);//Output: User's name is Alice and age is 30. 
"use strict";
const names = ["Alice", "Bob", "Charlie"];
// const nameLengths: number[] = numbers[1,2,3,4,5];
// const mixed: (string | number)[] = ["Alice", 1, "Bob",2, "Charlie",3];
for (const name of names) {
    console.log(name);
}
for (let i = 0; i < 4; i++) {
    console.log(`Name at index ${i}: ${names[i]}`);
}
names.forEach((name, index) => {
    console.log(`Name at index ${index}: ${name}`);
});
console.log(names); // Output: ["Alice", "Bob", "Charlie","David"]
console.log(names[0]); // Output: Alice
console.log(names.length); // Output: 4

"use strict";
const ages = [12, 18, 25, 15, 30];
//const adults: number[] = ages.filter((age: number) => {
//    return age >= 18;
//});
const adults = ages.filter((age) => age >= 18);
console.log(adults); // Output: [18, 25, 30]

//Task 1: CommonJS vs ES Modules . create two version of same small utility . one using require/module.exports and another import/export.
// three bulletPoints when to use which.

const math = require("./math.cjs");
console.log(math.add(5,6));
console.log(math.multiply(5,6));
// this is in task1 folder 
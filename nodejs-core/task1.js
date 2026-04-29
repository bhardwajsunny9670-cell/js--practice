//Task 1: CommonJS vs ES Modules . create two version of same small utility . one using require/module.exports and another import/export.
// three bulletPoints when to use which.

const math = require("./task1/math.cjs");
console.log(math.add(5,6));
console.log(math.multiply(5,6));


// bulletPoints :

// CJS = Flexible , Blocking, dynamic imports , working on old node.js projects
// EJS = Modern , strict and Optimized, starting new project

// Use CJS for Node.js scripts and EJS for modern web development. ESM is faster in large apps because it allows static analysis and optimization

//CJS loads at runtime(sync/blocking), ESM loads before execution(async/static).

// node.js handles modularity using CommonJS module system with require() and module. exports.

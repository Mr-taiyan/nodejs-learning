const fs = require("fs");
const { name, add } = require("./name.js");

// fs.writeFileSync("note", "this file was create by Node.js");

console.log(name);
add();
console.log(name);

// Native Modules in node js contexts are modules that are written in C/C++ to interact with lower level functions/libraries. Those functions are then wrapped using NaN (Not a Number) or Node-Addons-API to make then available in NodeJs. 

// Using Native Node Modules

// The node:fs is module interacting with the file system in a way modeled.
const fs = require("node:fs");

// writeFile() method is used to create and modify file 
fs.writeFile("message.txt", "Hey this is test of native module 'file system' of node.", function (error) {
    if (error) throw error;

    console.log("File has been created!");
});


// ************************************Challenge***********************************************

// readFile() method is used to read file
const readFile = fs.readFile("./message.txt", "utf8", function (error, data) {
    if (error) throw error;
    console.log(data);
})

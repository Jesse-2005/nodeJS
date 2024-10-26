// Reading input and writing output

// Core Modules

const readline = require('readline');
const fs = require('fs');
const http = require('http');
const url = require('url');
const events = require('events');

//Logic

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question("What is your name? ", (name) => {
    rl.question("What is your age? ", (age) => {
        console.log('Hello ' + name + ', you are ' + age + ' years old.'); // console.log(`Hello ${name}, you are ${age} years old.`);
        rl.close();
    });
});
rl.on('close', () => {
    console.log("Interface Closed");
    process.exit(0);
});



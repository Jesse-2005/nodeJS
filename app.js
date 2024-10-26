// Reading input and writing output

// Core Modules

const readline = require('readline');
const fs = require('fs');
const http = require('http');
const url = require('url');
const events = require('events');
const express = require('express');

//Logic

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout,
// });
// rl.question("What is your name? ", (name) => {
//     console.log("Your name is "+ name.toUpperCase());
//     rl.close();
// });
// rl.on('close', () => {
//     console.log("Interface Closed");
//     process.exit(0);
// });

// Reading and writing a file

// let textIn = fs.readFileSync('./Files/input.txt', 'utf-8');
// console.log(textIn);

// let content = `Data read from input.txt: ${textIn}. \nDate created ${new Date()}`;
// fs.writeFileSync('./Files/output.txt', content);

// Reading and writing a file Asynchronously
// fs.readFile('./Files/start.txt', 'utf-8', (error1, data1) => {
//     console.log(data1);
//     fs.readFile(`./Files/${data1}.txt`, 'utf-8', (error2, data2) => {
//         console.log(data2);
//         fs.readFile(`./Files/append.txt`, 'utf-8', (error3, data3) => {
//             console.log(data3);
//             fs.writeFile('./Files/output.txt', `${data2}\n\n${data3}\n\nDate Created ${new Date()}`, () => {
//                 console.log('File Written successfully');
//             });
//         });
//     });
// });
// console.log('Reading Files...');

// Creating a server


const html = fs.readFileSync('./template/index.html', 'utf-8');
let products = JSON.parse(fs.readFileSync('./Data/product.json', 'utf-8'));
let productListHtml = fs.readFileSync('./template/product-list.html', 'utf-8')
const server = http.createServer((request, response) => {
    let path = request.url;
    if(path === '/' || path.toLocaleLowerCase() === '/home'){
        response.writeHead(200, {
            'Content-Type' : 'text/html',
            'my-header' : 'Hello world',
        });
        response.end(html.replace('{{%CONTENT%}}', productListHtml));
    }
    else if(path.toLocaleLowerCase() === '/about'){
        response.end('You are in the about page');
    }
    else if(path.toLocaleLowerCase() === '/product'){
        response.writeHead(200, {
            'Content-Type' : 'application/json',
            'my-header' : 'Product',
        });
        // fs.readFile('./Data/product.json', 'utf-8', (error, data) => {
        //     response.end(data);
        // });
        response.end('You are in the product page');
        console.log(products);
    }
    else{
        response.writeHead(404, {
            'Content-Type' : 'text/html',
            'my-header' : 'error',
        });
        response.end('Error: Invalid url')
    }
    // response.end(html);
    // console.log('A new response received');
});




server.listen(8000, '127.0.0.1', () =>{
    console.log('Server is running on port 8000');
});


// const server = express();
// server.use(express.static('template'));

















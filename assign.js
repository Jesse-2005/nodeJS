const readline = require('readline');
const fs = require('fs');
const http = require('http');
const url = require('url');


// Reading and writing a file

// let inputTxt = fs.readFileSync('./file/input.txt', 'utf-8');
// console.log(inputTxt);

// let content = `Data read from input.txt: ${inputTxt} \nDate created ${new Date()}`;
// fs.writeFileSync('./file/output.txt', content);

// Reading and writing a file Asynchronously
// fs.readFile('./file/start.txt', 'utf-8', (error1, data1) => {
//     console.log(data1);
//     fs.readFile(`./file/${data1}.txt`, 'utf-8', (error2, data2) => {
//         console.log(data2);
//         fs.writeFile('./file/output.txt', `${data2}\n\n\nDate Created ${new Date()}`, () => {
//             console.log('File Written successfully');
//         });
//     });
// });
// console.log('Reading Files...');

// Creating a server


// const html = fs.readFileSync('./Templates/index.html', 'utf-8');
// const server = http.createServer((request, response) => {
//     response.end(html);
//     console.log('A new response received');
// });

// server.listen(3000, '127.0.0.1', () =>{
//     console.log('Server is running on port 3000');
// });

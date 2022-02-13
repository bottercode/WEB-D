const fs = require('fs');
const path = require('path');

// Create a folder
// fs.mkdir(path.join(__dirname, '/test'), {}, err =>{
//     if(err) throw err;
//     console.log('Folder Created!');
// });


// Create and write to a file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err =>{
    if(err) throw err;
    console.log('File written to!');

    // File append
    fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello izz Botter', err =>{
        if(err) throw err;
        console.log('File written to!');
    });
});


// read file

fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err,data) => {
    if(err) throw err;
    console.log(data);
});
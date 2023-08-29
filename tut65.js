// Blocking and Non-Blocking
let fs=require('fs');
fs.readFile('tut2.js','utf-8',(err,data)=>{
    console.log(err,data);
})
console.log('This is a message');
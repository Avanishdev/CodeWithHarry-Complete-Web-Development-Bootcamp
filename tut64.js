const fs=require('fs');
let text=fs.readFileSync('tut2.html','utf-8');
console.log(text);
let text1=text.replace('Hello World','Hii World');
console.log(text1);
let newtext=fs.writeFileSync('tut2.js',text1);
console.log(newtext);

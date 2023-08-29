const express=require('express');
const path=require('path');
const { title } = require('process');
const app=express();
const fs = require("fs");
const { urlencoded } = require('express');
const port=80;
// To serve static files
app.use('/static',express.static('static'));
app.use(express.urlencoded())
// To set template engine as pug
app.set('view engine','pug');
// To view files directory
app.set('views', path.join(__dirname, 'views'))

app.get('/',(req,res)=>{
    const con = "This is the best content on the internet so far so use it wisely"
    const params = {'title': 'PubG is the best game', "content": con}
    res.status(200).render('index.pug',params)
})
app.post('/', (req, res)=>{
    name = req.body.name
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

    let outputToWrite = `the name of the client is ${name}, ${age} years old, ${gender}, residing at ${address}. More about him/her: ${more}`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('index.pug', params);

})
app.listen(port,()=>{
    console.log(`Serving our application on ${port}`);
})
const express=require('express');
const path=require('path');
const app=express();
const fs=require('fs')
const port=80;

app.use('/static',express.static('static'));
app.use(express.urlencoded())

app.set('view engine','pug');
app.set('views', path.join(__dirname, 'views'))

app.get('/',(req,res)=>{
    const params=''
    res.status(200).render('index.pug',params)
})
app.get('/contact',(req,res)=>{
    const params=''
    res.status(200).render('contact.pug',params)
})
app.post('/contact', (req, res)=>{
    name = req.body.name
    phone = req.body.phone
    email = req.body.email
    address = req.body.address
    

    let outputToWrite = `The name of the client is ${name}, ${phone} , ${email}, residing at ${address}.`
    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message': 'Your form has been submitted successfully'}
    res.status(200).render('contact.pug', params);

})











app.listen(port,()=>{
    console.log(`Serving our application on ${port}`);
})
// Tut #88
const express=require('express');
const path=require('path');
const app=express();
const fs=require('fs')
const mongoose = require('mongoose');
// const bodyparser=require('bodyparser')
const port=80;
mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser: true});
const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    address: String,
    email: String,
    desc: String,
  });
const Contact = mongoose.model('Contact', contactSchema);

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

app.post('/contact',(req,res)=>{
    var myData=new Contact(req.body);
    myData.save().then(()=>{
        res.send('Your data has been saved in the database')
    })
    .catch(()=>{
        res.status(400).sender('Your data has not been saved in the database')
    })
})








app.listen(port,()=>{
    console.log(`Serving our application on ${port}`);
})
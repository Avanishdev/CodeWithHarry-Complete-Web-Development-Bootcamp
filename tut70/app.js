const express=require('express');
const path=require('path');
const { title } = require('process');
const app=express();
const port=80;
// To serve static files
app.use('/static',express.static('static'));
// To set template engine as pug
app.set('view engine','pug');
// To view files directory
app.set('views', path.join(__dirname, 'views'))
// To set our pug demo endpoint
// Our pug demo endpoint
app.get("/demo", (req, res)=>{ 
    res.status(200).render('demo', { title: 'Hey Harry', message: 'Hello there and thanks for telling me how to use pubG!' })
});


app.get('/',(req,res)=>{
    res.send('Home Page with get request')
});
app.get('/about',(req,res)=>{
    res.status(400).send('About Page with get request')
});
app.post('/',(req,res)=>{
    res.send('Home Page with post request')
});
app.listen(port,()=>{
    console.log(`Serving our application on ${port}`);
})
const express = require('express');
const app = express();
const bodyParser= require('body-parser');
// allow to log our http request : module permet d'afficher les requests http : 'morgan'
const morgan = require('morgan');
const mongoose = require('mongoose');

// for using constant from other place .env:
require('dotenv/config');
 // this is how we import it : 
 const api = process.env.API_URL;
 


//MiddleWare:
app.use(express.json());

app.use(bodyParser.json());
app.use(morgan('tiny'));


// http://localhost:3000/api/v1/products
/// get product:
app.get(`${api}/products` , (req,res)=>
{
    const product = {
        id:1,
        name:'hair dresser',
        image:'url',
        price:'70 DT'

    }
    res.send(product);
}) ;
app.post(`${api}/products` , (req,res)=>
{

    const newProduct = req.body;
    console.log(newProduct);
    res.send(newProduct);


})











mongoose.connect(process.env.CONNECTION_STRING)
.then(()=>
{
    console.log('dataBase connection is ready ....');
})
.catch((err)=>{
    console.log(err);
})

app.listen(3000 , ()=>
{
 console.log(api);
console.log('server is running on http://localhost:3000');


})
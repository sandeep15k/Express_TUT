const fs = require('fs')
const express = require('express');
const morgan = require('morgan');
const server= express();
server.use(express.json())
const products = JSON.parse(fs.readFileSync('data.json','utf-8'))

// Middleware
// server.use((req,res,next)=>{
//     console.log("Type: ",req.method);
//     next()

// })
server.use(morgan('dev'))   //can use 'default instead of that

server.use(express.static('public'))   //now this will not redirect to get method because we have declared the static hosting with name index.html (and is the very first 
// ....file which an express find , if we change the file name then it will goes to default method that is get method )  
//in short direcly access the file by name

const auth = (req,res,next)=>{
    console.log(req.body);
    if (req.body.password ==123) {   //this(==) will not check the type no matter wether values are in string or not
    
        next()
    }else{
        res.sendStatus(401)
    }
}

// if want to implement on all apis
// server.use(auth);

 


// Api's  C R U D

// CREATE PRODUCT
server.post('/products',(req,res)=>{
    console.log(req.body);
    products.products.push(req.body)
     res.status(201).json(req.body)
 })


// READ - GET /products
server.get('/products', (req,res)=>{
    res.json(products)
})

server.get('/products/:id', (req,res)=>{
    console.log(req.params);
    const id = +req.params.id  //here the Id is in string in order to make number use +
    const product = products.products.find(p=>p.id===id)
    // console.log(products);
    console.log(product);
    res.json(product)
})

 


server.put('/products/:id',(req,res)=>{
    const id = +req.params.id;
    const productIndex = products.products.findIndex(p=>p.id===id)  //findIndex uses to fetch index no
    console.log(productIndex);
    products.products.splice(productIndex,1,{...req.body,id:id})

    res.status(201).json({product:"updated successfully"})
})

 

server.delete('/',(req,res)=>{
    res.json({type:"delete"})
})

server.patch('/',(req,res)=>{
    res.json({type:"patch"})
})
 
server.get('/demmo',(req,res)=>{
    // res.sendStatus(404);
    // res.json(data)
// res.status(201).send('<h1>Compound Finance</h1>')
// res.sendFile('/home/cbl-pc-077/Documents/expresss/Tutorial/Express_TUT/index.html')
})
 
server.listen(8080,()=>{
    console.log("server started");
})

 
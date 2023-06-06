
const express = require('express');
const morgan = require('morgan');
const server= express();
server.use(express.json())
const productRouter = require('./routes/product')

// const {router} = require('./routes/product')

server.use('/products',productRouter)
// const {createProduct,getAllProduct,getProduct,updateProduct,replaceProduct,deleteProduct} = require("./controller/product")
 
  
// Middleware
// server.use((req,res,next)=>{
//     console.log("Type: ",req.method);
//     next()

// })
server.use(morgan('dev'))   //can use 'default instead of that

server.use(express.static('public'))   //now this will not redirect to get method because we have declared the static hosting with name index.html (and is the very first 
// ....file which an express find , if we change the file name then it will goes to default method that is get method )  
//in short direcly access the file by name

 

 
 
server.listen(8080,()=>{
    console.log("server started");
})

 
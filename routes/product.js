const express = require("express");
 const router = express.Router()
const productController = require("../controller/product")

// Api's  C R U D

// CREATE PRODUCT
 router.post('/products',productController.createProduct)

// READ - GET /products
 .get('/',productController.getAllProduct)

 .get('/:id',productController.getProduct)

// UPDATE - products by id
 .put('/:id',productController.updateProduct)

// PATCH- products by idrouter
 .patch('/:id',productController.replaceProduct)

//DELETErouter
 .delete('/:id',productController.deleteProduct)

 
 
 .get('/demmo',(req,res)=>{
    // res.sendStatus(404);
    // res.json(data)
// res.status(201).send('<h1>Compound Finance</h1>')
// res.sendFile('/home/cbl-pc-077/Documents/expresss/Tutorial/Express_TUT/index.html')
})


 module.exports = router
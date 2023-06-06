const express = require("express");
 const router = express.Router()
const productController = require("../controller/product")

// Api's  C R U D

// CREATE PRODUCT
  router.post('/products',productController.createProduct)

// READ - GET /products
 .get('/products',productController.getAllProduct)

 .get('/products/:id',productController.getProduct)

// UPDATE - products by id
 .put('/products/:id',productController.updateProduct)

// PATCH- products by id
 .patch('/products/:id',productController.replaceProduct)

//DELETE
 .delete('/products/:id',productController.deleteProduct)

 
 
 .get('/demmo',(req,res)=>{
    // res.sendStatus(404);
    // res.json(data)
// res.status(201).send('<h1>Compound Finance</h1>')
// res.sendFile('/home/cbl-pc-077/Documents/expresss/Tutorial/Express_TUT/index.html')
})


 module.exports = router;
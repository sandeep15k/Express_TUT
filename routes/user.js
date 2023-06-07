const express = require("express");
 const router = express.Router()
const userContoller = require("../controller/user")

// Api's  C R U D

// CREATE PRODUCT
 router.post('/products',userContoller.createUsers)

// READ - GET /products
 .get('/',userContoller.getAllUsers)

 .get('/:id',userContoller.getUser)

// UPDATE - products by id
 .put('/:id',userContoller.updateUsers)

// PATCH- products by idrouter
 .patch('/:id',userContoller.replaceUsers)

//DELETErouter
 .delete('/:id',userContoller.deleteUser)

 
 
 .get('/demmo',(req,res)=>{
    // res.sendStatus(404);
    // res.json(data)
// res.status(201).send('<h1>Compound Finance</h1>')
// res.sendFile('/home/cbl-pc-077/Documents/expresss/Tutorial/Express_TUT/index.html')
})


 module.exports = router
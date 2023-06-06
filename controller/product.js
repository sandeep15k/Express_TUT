const fs = require('fs')
const products = JSON.parse(fs.readFileSync('data.json','utf-8')) 
 
exports.createProduct= (req,res)=>{
    console.log(req.body);
    products.products.push(req.body)
     res.status(201).json(req.body)
 }

 exports.getAllProduct=(req,res)=>{
    res.json(products)
}

exports.getProduct = (req,res)=>{
    console.log(req.params);
    const id = +req.params.id  //here the Id is in string in order to make number use +
    const product = products.products.find(p=>p.id===id)
    // console.log(products);
    console.log(product);
    res.json(product)
}
 
exports.updateProduct = (req,res)=>{
    const id = +req.params.id;
    
    const productIndex = products.products.findIndex(p=>p.id===id)  //findIndex uses to fetch index no
    console.log(productIndex);
    let test = products.products.splice(productIndex,1,{...req.body,id:id})//it means find the data having index productIndex then delete (1) and add the req.body with id:id

    res.status(201).json({product:"updated successfully"})
}


exports.replaceProduct= (req,res)=>{     //patch is use to override the data instead of replacing by new one 
    const id = +req.params.id;
    const productIndex = products.products.findIndex(p=>p.id === id)
    const product = products.products[productIndex]
    console.log("///////////////////////",product);
    products.products.splice(productIndex,1,{...product,...req.body})
    res.status(201).json({product:"patched successfully"})
}

exports.deleteProduct = (req,res)=>{
    const id = +req.params.id;
    const productIndex = products.products.findIndex(p=>p.id===id)
    const product = products.products[productIndex];
    console.log(product,"===================");
    products.products.splice(productIndex,1);
    res.json({products:"deleted successfully"})
}

// export const product  = {createProduct,getAllProduct,getProduct,updateProduct,replaceProduct,deleteProduct}
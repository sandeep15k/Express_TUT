const fs = require('fs')
const data = JSON.parse(fs.readFileSync('data.json','utf-8')) 
const users = data.users
 
exports.createUsers= (req,res)=>{
    console.log(req.body);
    users.push(req.body)
     res.status(201).json(req.body)
 }

 exports.getAllUsers=(req,res)=>{
    res.json(users)
}

exports.getUser = (req,res)=>{
    console.log(req.params);
    const id = +req.params.id  //here the Id is in string in order to make number use +
    const user = users.find(p=>p.id===id)
    // console.log(products);
    console.log(user);
    res.json(user)
}
 
exports.updateUsers = (req,res)=>{
    const id = +req.params.id;
    
    const userIndex = users.findIndex(p=>p.id===id)  //findIndex uses to fetch index no
    console.log(userIndex);
    let test = users.splice(userIndex,1,{...req.body,id:id})//it means find the data having index productIndex then delete (1) and add the req.body with id:id

    res.status(201).json({user:"updated successfully"})
}

exports.replaceUsers= (req,res)=>{     //patch is use to override the data instead of replacing by new one 
    const id = +req.params.id;
    const userIndex = users.findIndex(p=>p.id === id)
    const user = users[userIndex]
    console.log("///////////////////////",user);
    users.splice(userIndex,1,{...user,...req.body})
    res.status(201).json({user:"patched successfully"})
}

exports.deleteUser = (req,res)=>{
    const id = +req.params.id;
    const userIndex = users.findIndex(p=>p.id===id)
    const user = users[userIndex];
    console.log(user,"===================");
    users.splice(userIndex,1);
    res.json({user:"deleted successfully"})
}

// export const product  = {createProduct,getAllProduct,getProduct,updateProduct,replaceProduct,deleteProduct}
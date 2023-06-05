const fs = require('fs')
const express = require('express');
const morgan = require('morgan');
const server= express();
server.use(express.json())
const data = JSON.parse(fs.readFileSync('data.json','utf-8'))

// Middleware
// server.use((req,res,next)=>{
//     console.log("Type: ",req.method);
//     next()

// })
server.use(morgan('dev'))   //can use 'default instead of that

// server.use(express.static('public'))   //now this will not redirect to get method because we have declared the static hosting with name index.html (and is the very first 
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

 


// Api's 

server.get('/product/:id', (req,res)=>{
console.log(req.params);
    res.json({type:"get"})
})

server.put('/',(req,res)=>{
    res.json({type:"update"})
})

server.post('/',auth,(req,res)=>{
    res.json({type:"post"})
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

 
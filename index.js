const express = require('express');


const app = express();

app.post("/",(req,res)=>{
    try {
        const { name } = req.body;
        
        res.send(200,`Hello ${name}`);
    } catch (error) {
        res.send(500, error);
    }
    
});

app.listen(3000);

const express = require('express')
const res = require('express/lib/response')
const app = express()

app.use(express.json())

app.get('/',(req,res)=>res.send({message:'active'}))

app.listen(8080, ()=> console.log('server is running on port 8080'))
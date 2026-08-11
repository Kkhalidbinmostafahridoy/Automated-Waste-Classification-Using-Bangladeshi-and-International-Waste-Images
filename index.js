const express=require('express');
const app=express()
const port=7000;

app.get('/',(req,res)=>{
    res.send('from my first ever server')
})

app.get('/data',(req,res)=>{
    res.send("hi this khalid bin mostsfa hridoy")
})
app.listen(port,()=>{
    console.log(`my server is running :${port}`)
})
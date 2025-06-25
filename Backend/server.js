import express from 'express'
import mongoose from 'mongoose'
import { connectDB } from './config/db.js'
import User from './model/user.js'
import dotenv from 'dotenv'
dotenv.config()
const app=express()

connectDB()
app.use(express.json())
app.use(express.urlencoded())

const methodFind=(req,res,next)=>{
    console.log(`${req.method} ${req.url}`);
    next()
}
app.use(methodFind)
const blockDelete=(req,res,next)=>{
    if(req.method==="DELETE"){ 
        return res.send('Delete function blocked')
    }
    next()
}
app.use(blockDelete)
app.get('/get',async(req,res)=>{
    const user= await User.find()
    res.json(user)
})
app.get('/get/:id',async(req,res)=>{
   try {
    const user=await User.findById(req.params.id)
    if(!user) res.json({msg:'no user found with that id'})
        res.json(user)
   } catch (error) {
    res.send(error)
   } })
app.post('/post',async(req,res)=>{
    try{
        const newUser=new User(req.body)
        await newUser.save()
        res.send('from post')
        res.status(201).json(newUser)
    } catch (error){
        res.status(401).json(errorc)
    }
})
app.put('/put/:id',async(req,res)=>{
    try {
        const update=await User.findByIdAndUpdate(req.params.id,req.body)
        res.json({msg:'data updated'})
    } catch (error) {
        res.json(error)
    }
   
})
app.patch('/patch',(req,res)=>{
    res.send('from patch')
})
app.delete('/delete',async(req,res)=>{
    try {
         await User.findByIdAndDelete(req.params.id)
        res.send('ID delete')
    } catch (error) {
        res.status(401).json(error)
        
    }
   
})
app.listen(3000,()=>{
    console.log('Server running on port 3000')
})
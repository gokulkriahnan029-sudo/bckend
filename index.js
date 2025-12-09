import express from "express";
import connectDB from "./db.js";
import Data from "./module.js";
import cors from "cors"

const app = express();
const PORT = process.env.PORT || 4000 
connectDB();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/' , async(req,res)=>{
   try {
     const getmess = await Data.find();
     res.json(getmess)
   } catch (error) {
    
   }
});

app.post('/',  async(req,res)=>{
    const newdata = new Data({
        name: req.body.name,
        message: req.body.message
    })
    try {
        await newdata.save();
        res.status(201).json(newdata);
    } catch (error) {
       res.status(400).json({messaaage: error.message})
    }
});
app.listen(PORT, (req,res)=>{
    console.log('server is connected '+ PORT)
});
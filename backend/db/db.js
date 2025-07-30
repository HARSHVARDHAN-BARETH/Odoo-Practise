import mongoose from "mongoose";
import dotenv from "dotenv"
dotenv.config();

const mongoDB = async ()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI,{
            useNewUrlParser:true,
            UseUnifiedTopology:true
        })
        console.log("mongodb connected successfully!");
    }catch(err)
    {
        console.log(err);
    }
}

export default mongoDB;
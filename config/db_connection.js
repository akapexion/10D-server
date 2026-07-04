import mongoose from "mongoose";

const dbConnect = async() => {
    try{
        await mongoose.connect("mongodb://localhost:27017/10d-FS");
        console.log("MongoDB Connected Successfully");
    }
    catch(err){
        console.log(err);
    }
}

export default dbConnect;
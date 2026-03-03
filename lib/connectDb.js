import mongoose, { mongo } from "mongoose";

async function main(){
    if(mongoose.connection.readyState === 1) return;
    try{

        const a = await mongoose.connect(process.env.MONGO_URI)
        console.log("Connection successful!")
    }
    catch(err){
        console.log(err)
    }
}

export default main;

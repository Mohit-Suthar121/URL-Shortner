import mongoose, { mongo } from "mongoose";

async function main(){
    if(mongoose.connection.readyState === 1) return;
    try{

        const a = await mongoose.connect("mongodb://localhost:27017/urlshortner")
        console.log("Connection successful!")
    }
    catch(err){
        console.log(err)
    }
}

export default main;

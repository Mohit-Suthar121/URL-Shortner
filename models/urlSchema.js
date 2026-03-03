import mongoose from "mongoose";

const mongooseSchema = new mongoose.Schema({
    websiteurl:{
        type:String,
        required:true
    },
    shortname:{
        type:String,
        required:true,
        unique:true
    }
})

const urlModel = mongoose.models.urldata || mongoose.model("urldata",mongooseSchema);
export default urlModel;
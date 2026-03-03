

import mongoose from "mongoose";
import main from "../../../lib/connectDb";
import urlModel from "../../../models/urlSchema";



export async function POST(req) {
    try{

   
    const body = await req.json();
    await main()
    const newWebUrl = ((!body.websiteurl.startsWith("https://")) && (!body.websiteurl.startsWith("http://")))?("http://"+body.websiteurl):body.websiteurl;
    const doc = new urlModel({websiteurl: newWebUrl,shortname:body.shortname}) 
    await doc.save()
     console.log("the frontend has sent this data: ",body);
     console.log("and the data saved to the mongodb is: ",doc);
    return Response.json({message:"Data received",data:body});
     }
     catch(error){
        if(error.code===11000){
            return Response.json({error:"Shortname already exists"},{status:400})
        }
        
            return Response.json({error:"Server Error"},{status:500})
       
     }
}
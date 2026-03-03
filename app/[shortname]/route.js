
import { NextResponse } from "next/server";
import urlModel from "../../models/urlSchema";
import main from "../../lib/connectDb";

export async function GET(req,context) {
    const parameters = await context.params;
    const shortName = parameters.shortname;
    console.log("Redirecting")
    await main();
    const urlData = await urlModel.findOne({shortname:shortName});
    if(!urlData){
        return new NextResponse("Not Found",{status:404})
    }
    return NextResponse.redirect(new URL(urlData.websiteurl))
}
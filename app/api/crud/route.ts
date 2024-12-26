// All the CRUD Operation will be perform here 

import { NextRequest, NextResponse } from "next/server";

type Post={
    name:string
}

export const POST =(req:NextRequest)=>{

    const {name}:Post=req.body;

    try {

        NextResponse.json({message:"Post",name:name})
        
    } catch (error) {

        NextResponse.error(error)
        
    }
    




    
}

export const GET=()=>{

return NextResponse.json({message:"Hello Hemant is here"})

}
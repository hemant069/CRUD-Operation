import dbConnect from "@/lib/dbConnect"
import CrudModal from "@/Model/crud.model";


export const POST=async(request:Request)=>{
    await dbConnect();
    

    try {

        const {message}=await request.json()

    const newmessage=new CrudModal({message});

    await newmessage.save();

    return Response.json({
        message:"Message is Added Sucessfully",
        
        
    },{
        status:201
    })
        
    } catch (error) {

        console.error("Message is Not Added",error)
        
    }
}


export const GET=async()=>{
 
    await dbConnect()


try {
    const Message= await CrudModal.find();

    if(!Message){

        return Response.json({message:"Something went wrong"},{status:401});
    }
    

    return Response.json({message:Message},{status:201})
    
} catch (error) {

    console.log("Not Find Message",error)
    
}
    
}




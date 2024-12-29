import dbConnect from "@/lib/dbConnect";
import CrudModal from "@/Model/crud.model";

export async function PUT(req: Request, context: { params: { id: string } }) {
    try {

        const {id}=context.params;
        const Message=await req.json()

       if(!id){
        return Response.json({message:"Wrong Id getting"},{status:404})
       }


       const findMessageById=await CrudModal.findById(id);


       const UpdateMessage= await CrudModal.updateOne(Message);

       

       

       return Response.json({message:"Message is Updated Success",UpdateMessage},{status:201})
        
    } catch (error) {

        console.log("Error ",error);

        return Response.json({message:"Something Went Wrong",error},{status:404})
        
    }
}



export const DELETE=async(req:Request,context:{params:{_id:string}})=>{

await dbConnect()

try {
    const {_id}=context.params;

    const DeletedMessage= await CrudModal.findOneAndDelete(_id);

    return Response.json({message:"Message is Deleted Successfully",DeletedMessage},{status:202})





} catch (error) {

   return Response.json({message:"Something went wrong",error},{status:501})
    
}
}
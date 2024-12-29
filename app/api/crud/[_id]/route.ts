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



export const DELETE = async (req: Request, context: { params: { _id: string } }) => {
    await dbConnect();

    try {
        const { _id } = context.params;

        // Check if the message exists first
        const message = await CrudModal.findById(_id);
        console.log("message baby",message)
        if (!message) {
            return Response.json(
                { message: "Message not found" },
                { status: 404 }
            );
        }

        // Delete the message using a filter object
        const deletedMessage = await CrudModal.deleteOne({ _id: _id });

        // Check if deletion was successful
        if (deletedMessage.deletedCount === 0) {
            return Response.json(
                { message: "Failed to delete message" },
                { status: 400 }
            );
        }

        return Response.json(
            { 
                message: "Message deleted successfully",
                deletedMessage 
            },
            { status: 200 }  // Using 200 for successful deletion instead of 202
        );

    } catch (error) {
        console.error("Delete error:", error);
        return Response.json(
            { 
                message: "Something went wrong",
                error: error instanceof Error ? error.message : "Unknown error"
            },
            { status: 500 }  // Using 500 for server errors instead of 501
        );
    }
}
import mongoose from "mongoose"


type isconnectionsObj={
    isconnected?:number
}

const connections:isconnectionsObj={

}




async function dbConnect():Promise<void> {

    if(connections.isconnected){

        console.log("DB is already connected");
        return 


    }
    try {

        const db=await mongoose.connect(process.env.MONGO_URL || '')

        connections.isconnected=db.connections[0].readyState

        
    } catch (error) {
        
        console.log("Db is not Connected",error)
        process.exit(1)
    }
    
}

export default dbConnect;

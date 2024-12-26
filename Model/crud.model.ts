
import mongoose, { Schema,Document } from "mongoose";



export interface crud extends Document{
    message:string

}

const CurdSchema:Schema<crud>=new Schema({
    message:{
        type:String,
        required:[true,"Message is required"]
    }
})


const CrudModal=(mongoose.models.CurdSchema as mongoose.Model<crud>)||mongoose.model<crud>("crud",CurdSchema)

export default CrudModal;
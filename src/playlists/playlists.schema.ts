import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { Document, Types } from "mongoose";


@Schema({timestamps : true})
export class Playlist extends Document {
    
    @Prop({required : true})
        name : string
    @Prop({type : Types.ObjectId , ref : 'User' , required : true})
        owner : Types.ObjectId
    @Prop({type : [{ type: Types.ObjectId, ref: 'User' }], default : []})
        videos : Types.ObjectId[]
}

export const playListSchema = SchemaFactory.createForClass(Playlist)
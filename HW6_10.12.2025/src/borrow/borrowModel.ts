import mongoose,{Model, Schema} from "mongoose";

export interface Iborrow{
    bookId:string,
    userId:string,
    creatAt?:Date
}

const borrowschema=new Schema<Iborrow>({
    bookId:{type:String,required:true,ref:'Book'},
    userId:{type:String,required:true,ref:'User'}
},
{ 
   _id:true,
   virtuals:true
}
);
borrowschema.virtual('creatAt').get(function(){
    let dateCreate:Date= new Date();
    return dateCreate;
})

export const borrowMod: Model<Iborrow>=mongoose.model<Iborrow>('Borrow',borrowschema);
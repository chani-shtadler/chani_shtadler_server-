import mongoose, {Schema} from 'mongoose';

const UserSchema = new Schema({
  _id: {
    type: String,
    required: true,
    unique: true,
    alias: 'userId' 
  },
  name: { type: String, required: true },
  //age: {type: Number},
  birthDate:{ type:Date, required:true, select: false},
  createdAt: {
        type: Date,
        default: Date.now,}
    },
 { 
    _id: false, 
    toJSON: { 
      virtuals: true,
      }
});
UserSchema.virtual('age').get(function(){
    const today = new Date();
    const birthDateDay = this.birthDate;
    const agee:number = today.getFullYear()-birthDateDay.getFullYear();
    return agee;
})

export const User = mongoose.model('User', UserSchema);
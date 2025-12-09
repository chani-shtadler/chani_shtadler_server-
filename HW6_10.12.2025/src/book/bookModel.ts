import mongoose, { Document, Schema, Model } from 'mongoose';
export interface IBook extends Document {
  bookName: string;
  bookPublisher:string;
}
const bookSchema = new Schema<IBook>(
  {
    bookName: { type: String, required: true },
    bookPublisher:{type:String,required: true}
  },
  {
    _id: true,
    timestamps: true,
    versionKey: false,
  }
);
export const Book: Model<IBook> = mongoose.model<IBook>('Book', bookSchema);
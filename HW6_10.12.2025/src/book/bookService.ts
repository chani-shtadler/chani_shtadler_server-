import { Book,IBook } from "./bookModel";
import  {Promise}  from "mongoose";

export const BookService = {
   // async getAllBooks(): Promise<IBook[]> {
    async getAllBooks() {
    return await Book.find().exec();
  },

    async addBook(bookDetails: {bookName: String,bookPublisher: String}):Promise<IBook>{
        const newBook=new Book(bookDetails);
        return await newBook.save();
  }
}
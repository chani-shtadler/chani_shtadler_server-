import express, { Request, Response } from 'express';
import { BookService } from './bookService';

export const bookRouter = express.Router();

bookRouter.get('/',async(req:Request,res:Response)=>{
    try{
        const books=await BookService.getAllBooks();
        res.status(200).json(books)
    }
    catch (error:any){
        res.status(500).json({error:'faild to give you the books list',details:error.message});
    }
});

bookRouter.post('/',async(req:Request,res:Response)=>{
    try{
        const bookName:string=req.body.bookName;
        const bookPublisher:string=req.body.bookPublisher;
        const bookDetails={bookName,bookPublisher};
        const book=await BookService.addBook(bookDetails);
        res.status(200).json(book);
    }
    catch(error :any){
        res.status(402).json({error: 'can not add the book',details: error.message});
    }
});
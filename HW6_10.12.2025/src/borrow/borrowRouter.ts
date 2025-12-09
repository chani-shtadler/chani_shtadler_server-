import { borrowService } from "./borrowService";
import express, { Request, Response } from 'express';

export const borrowRouter = express.Router();

borrowRouter.get('/:userId',async(req:Request,res:Response)=>{
    try{
        const borr=await borrowService.getAllBorrowsByUserId(req.params.userId);
        res.status(200).json(borr);
    }
    catch(error : any){
        res.status(404).json({erorr:'can not show you the borrow now',details:error.message});
    }
});

borrowRouter.post('/',async(req:Request,res:Response)=>{
    try{
        const newBorrow=await borrowService.addBorrow(req.body);
        res.status(200).json(newBorrow);
    }
    catch(error: any){
        res.status(406).json({erorr:'faild add the borrow',details:error.message});
    }
});
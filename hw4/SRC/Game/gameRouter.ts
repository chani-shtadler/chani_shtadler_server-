import express,{ NextFunction, Request, response, Response } from "express";
import GameService from "./gameService";
//import { check } from "../middleWares/checks";

const router = express.Router();
const gameService=new GameService(100,1,0);

export default router;
router.get('/', (req:Request ,res:Response)=>{
    gameService.newRandomNumber();
    const msg = `the number is between range ${gameService.getMin()} and ${gameService.getMax()}`;
    //console.log('GET /number ->', msg);
    res.status(200).send(msg);
});


router.get('/:randomNumber',(req:Request,res:Response,next:NextFunction)=>{    
    let randomNumber=req.params.randomNumber;  
    let randomNum=Number(randomNumber);
    next(randomNum);   // 
});




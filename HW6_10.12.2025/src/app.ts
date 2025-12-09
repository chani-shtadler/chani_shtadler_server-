import { borrowRouter } from "./borrow/borrowRouter";
import { bookRouter} from "./book/bookRouter";
import { userRouter } from "./user/userRouter";
import express, { Request, Response } from 'express';
import { myDB } from "./db";
const app=express();

app.use(express.json());
myDB.getDB();

app.use('/users', userRouter);
app.use('/books', bookRouter);
app.use('/borrows', borrowRouter);

app.use((err: Error, req: Request , res: Response, next: any) => {
    res.status(500).send(err);
});



export default app;
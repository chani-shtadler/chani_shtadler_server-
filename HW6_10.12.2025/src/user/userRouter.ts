import { Router, Request, Response } from 'express';
import UserService from './userService'; 

export const userRouter = Router();

userRouter.get('/', async (req: Request, res: Response) => {
    try {
        const user = new UserService(); // יוצר אובייקט של הסרוויס שבתוכו יש את הפונקציה getAllUsers
        const users = await user.getAllUsers(); // מחזיר את כל המשתמשים מהדאטאבייס למשתנה users בפורמט של מערך אובייקטים
        res.status(200).send(users);
    } catch (error: any) {
        res.status(500).send({ error: 'Failed to fetch users', details: error.message });
    }
});

userRouter.post('/', async (req: Request, res: Response) => {
    const user = new UserService();
    const userDetails = req.body;
    try {
        const created = await user.addUser(userDetails);
        res.status(201).send(created);
    } catch (error: any) {
        res.status(400).send({ error: 'Failed to add user', details: error.message });
    }
});
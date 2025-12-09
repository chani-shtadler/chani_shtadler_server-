import { Iborrow,borrowMod } from "./borrowModel";
import mongoose, {Types} from "mongoose";
import Promise from "mongoose";

export const borrowService = {
    async addBorrow(borrowDetails:{userId: string,bookId:mongoose.Query<Iborrow | null,Iborrow>}): Promise<Iborrow>{
        const borrow=new borrowMod(borrowDetails);
        return await borrow.save();
    },

    async getAllBorrowsByUserId(userId: string) {
        return await borrowMod.find({ userId: userId }) 
            .populate('userId','name birthDate')
            .populate('bookId','bookName bookPublisher')
            .exec();
}}

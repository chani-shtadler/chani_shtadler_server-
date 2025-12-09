import { User } from './userModel';

export default class UserService {
    async getAllUsers() {
        return await User.find().select('+birthDate').exec();
    }

    async addUser(userDetails: { _id: string; name: string; birthDate: Date }) {
        const newUser = new User(userDetails);
        return await newUser.save();
    }
}
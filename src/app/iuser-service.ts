import { User } from "./user";


export interface IUserService {
    create(user : User) : Promise <User>;
    getUsers(): Promise<User[]>;
}

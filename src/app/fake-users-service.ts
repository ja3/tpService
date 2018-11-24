import { IUserService } from "./iuser-service";
import { User } from "./user";
import { promise } from "protractor";

export class FakeUsersService  implements IUserService{
 
    constructor(){}

    private users : User[]= <User[]>[
    {id : 1 ,firstName :'Jhon' , password :'12345',lastName:'doe',email:'jhon.doe@gmail.com',status:'online'},
    {id : 1 ,firstName :'Karim' , password :'12345',lastName:'jaouane',email:'karim.jaouane@gmail.com',status:'online'},
    {id : 1 ,firstName :'Mohamed' , password :'12345',lastName:'khayat',email:'mohamed.khayat@gmail.com',status:'online'},
    {id : 1 ,firstName :'Sami' , password :'12345',lastName:'midassi',email:'sami.midassi@gmail.com',status:'offline'},
    {id : 1 ,firstName :'Ali' , password :'12345',lastName:'mejri',email:'ali.mejri@gmail.com',status:'busy'}
    ];

getUsers():Promise<User[]>{
return Promise.resolve(this.users);
}

create(user : User): Promise <User> {
    return null ;
    }

}

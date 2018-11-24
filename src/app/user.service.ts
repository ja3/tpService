import { Injectable } from '@angular/core';
import { IUserService } from './iuser-service';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class UserService implements IUserService{

  constructor() { }

create(user : User): Promise <User> {
return null ;
}

  getUsers(): Promise<User[]>{
    return null ;
  }
  
}

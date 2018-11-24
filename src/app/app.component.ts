import { Component, OnInit } from '@angular/core';
import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'tpService';
  private _users : User[];
  constructor(private userService:UserService){}

  ngOnInit(){
    this.userService.getUsers().then(users =>{
     this._users=users;
    });
  }
}

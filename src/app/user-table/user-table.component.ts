import { Component, OnInit, Input } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {

private _users : User[];
 
constructor() { }

  ngOnInit() {
  }

  @Input() 
  set users(users:User[]) {
    console.log("Table users =>",users);
    this._users=users;
  }

  get users(){
    return this._users;
  }

}

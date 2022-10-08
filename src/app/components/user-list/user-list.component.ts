import { Component, OnInit } from '@angular/core';

import {UserService} from '../../services/user.service'
import {User} from '../../interfaces/User'

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[] = [];

  constructor( private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers()
  }

  getUsers(){
    this.userService.getUsers()
    .subscribe(
      res =>{
        this.users = res;
      },
      err => console.log(err)
    )
  }

  deleteUser(id:string){
    this.userService.deleteUser(id)
    .subscribe(
      res=> {
        this.getUsers();
      },
      err => console.log(err)
    )
  }

}

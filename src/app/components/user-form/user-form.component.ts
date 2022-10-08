import { Component, OnInit } from '@angular/core';
import {User} from  '../../interfaces/User';
import { Router, ActivatedRoute } from '@angular/router';
import {UserService} from '../../services/user.service'


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  user: User ={
    nome: "",
    email: "",
    telefone: "",
    sexo: "",
    _id: 0
  };

  edit: boolean= false;

  constructor(
    private userService: UserService,
    private router: Router, 
    private activateRoute:ActivatedRoute,
    ) { }

     
  ngOnInit(): void {
    const params = this.activateRoute.snapshot.params;
    if(params){
      this.userService.getUser(params['_id'])
      .subscribe(
        res => {
          console.log(res);
          this.user = res;
          this.edit = true
        }
      )
    }
  }

  submitUser(){
    this.userService.createUser(this.user)
    .subscribe(
      res => {console.log(res);
      this.router.navigate(['/']);
    },
      err => console.log(err)
    )
  }

  updateUser(){
    this.userService.updateUser(this.user._id, this.user)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/users'])
        },
        err => console.log(err)
      );
  }

}

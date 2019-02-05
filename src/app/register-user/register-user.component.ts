import { Component, OnInit } from '@angular/core';
import{UserServiceService} from '../services/user-service.service'

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss']
})
export class RegisterUserComponent implements OnInit {

  constructor(
    private userservice:UserServiceService
  ) { }
  role1:string = "student"
  role2:string = "teacher"
  role3:string = "admin"
    userlist:any[]
    role:string

  ngOnInit() {
    this.getuserbyRole(this.role1);
    this.role = this.role1;
  }

  change(role){
    console.log(role);
    this.role = role;
    this.getuserbyRole(role);
  }

  getuserbyRole(role:string){
    this.userservice.getallusersFromRole({role:role}).subscribe(result =>{
      console.log(result.data);
      this.userlist =result.data;
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username:String;
  password:String;

constructor(
private authService:AuthService,
private router : Router,
//private toastr: ToastrService
) { }

ngOnInit() {
}
onLoginSubmit(){

const user = {
  username:this.username,
  password:this.password,
}
this.authService.authendicateUser(user).subscribe(data =>{
  if(data.success){
    this.authService.storeUserData(data.token , data.user);
    this.authService.addUserData(data.role,data.userId);
    //console.log(data.token);
    //this.toastr.info('you are now login');
    console.log("you are now login");
    this.router.navigate(['/dashboard'])
  }
  else{
    //this.toastr.error(data.msg);
    console.log(data.msg);
    this.router.navigate(['/login'])
  }
  
});
}
}

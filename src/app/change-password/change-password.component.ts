import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../Services/notifications.service';
import {Router} from '@angular/router';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  StudentId:string;
  EnterPassword:string;
  Conformpassword:string;
  


  constructor(
    private notificationserivice: NotificationsService,
    private router:Router,
    private userServiceservice: UserServiceService,
  ) { }

  ngOnInit() {
  }

  change(){
    const user ={
    StudentId:this.StudentId,
    EnterPassword:this.EnterPassword,
    
  }


    this.userServiceservice.changepassword(user).subscribe(data => {
      if (data.success) {
        //console.log("your now registerd");
        console.log(data.msg);
        this.notificationserivice.alertSucceess(data.msg);
        this.router.navigate(["login"])

      }
      else {
        //console.log("Something went wrong");
        console.log(data.msg);
        this.notificationserivice.alertDanger(data.msg);
      }
    });
  }

}

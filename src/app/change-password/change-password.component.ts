import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../Services/notifications.service';
import { Router } from '@angular/router';
import { UserServiceService } from '../Services/user-service.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.scss']
})
export class ChangePasswordComponent implements OnInit {

  userId: string;
  password: string;
  Conformpassword: string;
  role: string;
  userDetectFlag: boolean = false;


  


  constructor(
    private notificationserivice: NotificationsService,
    private router: Router,
    private userServiceservice: UserServiceService,
  ) { }

  ngOnInit() {
    // this.StudentId = localStorage.getItem("userId")
  }

  change() {

     if (this.userDetectFlag) {

      const user = {
        userId: this. userId,
        password: this.password,
        role:this.role
      }
      console.log(user);
      
      this.userServiceservice.changepassword(user).subscribe(data => {
        if (data.success) {
          //console.log("your now registerd");
          console.log(data.msg);
          this.notificationserivice.alertSucceess(data.msg);

        }
        else {
          //console.log("Something went wrong");
          console.log(data.msg);
          this.notificationserivice.alertDanger(data.msg);
        }
      });
    }
    else {
      this.notificationserivice.alertWarning("No user found");
    }

  }

  valuechange(newValue) {
    // this.userDetectFlag = false;
    console.log(newValue);
    this.userServiceservice.findUser({ userId: newValue }).subscribe(data => {
      if (data.data.length) {
        this.notificationserivice.alertInfo("User found " + data.data[0].FirstName + " " + data.data[0].LastName);
        this.role = data.data[0].role;
        console.log(this.role);
        this.userDetectFlag = true;
      }
    });
  }

}

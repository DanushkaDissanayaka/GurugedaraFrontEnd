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

  SelectRole = "Select Reciver Role";
  userId: string;
  password: string;
  Conformpassword: string;
  role: string;
  userDetectFlag: boolean = false;
  Role = [
    { name: "other" },
    { name: "guardian" },
    
  ];

  


  constructor(
    private notificationserivice: NotificationsService,
    private router: Router,
    private userServiceservice: UserServiceService,
  ) { }

  ngOnInit() {
  }
    // this.StudentId = localStorage.getItem("userId")
    setDropDwonRole(value: string) {
      this.SelectRole = value;
    }

  

  change() {

     if (this.userDetectFlag) {

      const user = {
        userId: this. userId,
        password: this.password,
        role:this.SelectRole
      }
      console.log(user);
      
      this.userServiceservice.changepassword(user).subscribe(data => {
        if (data.success) {
          //console.log("your now registerd");
         // console.log(data.msg);
          this.notificationserivice.alertSucceess(data.msg);
          this. userId = "",
         this.password="",
         this.SelectRole="Select Reciver Role"
        }
        else {
          //console.log("Something went wrong");
         // console.log(data.msg);
          this.notificationserivice.alertDanger(data.msg);
        }
      });
    }
    else {
      this.notificationserivice.alertWarning("No user found");
    }

  }

  valuechange(newValue) {
    this.userDetectFlag = false;
    console.log(newValue);
    if(this.role = "guardian"){
      this.userServiceservice.getgurdiandetails({ userId: newValue }).subscribe(data => {
        if (data.data.length) {
          this.notificationserivice.alertInfo("User found " + data.data[0].FirstName + " " + data.data[0].LastName);
          console.log(this.role);
          this.userDetectFlag = true;
        }
      });
    }
    else{
      this.userServiceservice.findUser({ userId: newValue }).subscribe(data => {
        if (data.data.length) {
          this.notificationserivice.alertInfo("User found " + data.data[0].FirstName + " " + data.data[0].LastName);
          console.log(this.role);
          this.userDetectFlag = true;
        }
      });
    }
  }

}

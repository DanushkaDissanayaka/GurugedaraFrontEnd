import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service'

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userData: any
  userId: string
  role: string
  UserID:string
  constructor(private userservice: UserServiceService) { }

  ngOnInit() {
    this.userId = localStorage.getItem("userId");
    this.role = localStorage.getItem("role");
    if (this.role == "guardian") {
      this.userservice.getgurdiandetails({userId: this.userId}).subscribe(result =>{
        this.userData = result.data[0];
        this.UserID = result.data[0].username
        console.log(this.userData);
      });
    }
    else {
      this.userservice.findUser({ userId: this.userId }).subscribe(result => {
        if (result.success == true) {
          this.userData = result.data[0];
          this.UserID = result.data[0].UserID
          console.log(this.userData);
        }
      });
    }
  }
}
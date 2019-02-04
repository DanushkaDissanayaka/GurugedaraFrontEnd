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

/*{
DOB: "1992-07-01",
MsgFlag: 0,
NotificationFlag: 0,
Email: "dsjayamal@gmail.com",
UserID: "S105", …}
AddCity: "asdf"
AddNo: "41/3"
AddStreet: "asdf"
ContactNo: "0711502303"
DOB: "1992-07-01"
Email: "dsjayamal@gmail.com"
FirstName: "asd"
LastName: "asf"
MiddleName: "sadf"
MsgFlag: 0
NotificationFlag: 0
UserID: "S105"
password: "$2a$10$dtNHYbHR1H5vBBNsjq/Id.QXviy9axJGeDfs/IY.aE20jHEGHfqN2"
role: "student"*/
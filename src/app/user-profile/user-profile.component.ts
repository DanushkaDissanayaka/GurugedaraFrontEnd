import { ValidateService } from './../services/validate.service';
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
  UserID: string

  DOB: any
  email: string
  ContactNo: string
  AddStreet: string
  AddCity: string
  AddNo: string
  FirstName: string
  LastName: string
  MiddleName: string
  updateedusr: string




  constructor(
    private userservice: UserServiceService,
    private validateservice: ValidateService) { }

  ngOnInit() {
    this.userId = localStorage.getItem("userId");
    this.role = localStorage.getItem("role");
    if (this.role == "guardian") {
      this.userservice.getgurdiandetails({ userId: this.userId }).subscribe(result => {
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

  editProfile() {
    const user = {
      DOB: this.DOB,
      email: this.email,
      ContactNo: this.ContactNo,
      AddStreet: this.AddStreet,
      AddCity: this.AddCity,
      AddNo: this.AddNo,
      FirstName: this.FirstName,
      LastName: this.LastName,
      MiddleName: this.MiddleName,
      role: this.role,
      userId: this.userId
    }


    if (!this.validateservice.validateUndefined(this.DOB)) {
      user.DOB = this.userData.DOB
    }
    if (!this.validateservice.validateUndefined(this.email)) {
      user.email = this.userData.Email
    }
    if (!this.validateservice.validateUndefined(this.ContactNo)) {
      user.ContactNo = this.userData.ContactNo
    }
    if (!this.validateservice.validateUndefined(this.AddStreet)) {
      user.AddStreet = this.userData.AddStreet
    }
    if (!this.validateservice.validateUndefined(this.AddCity)) {
      user.AddCity = this.userData.AddCity
    }
    if (!this.validateservice.validateUndefined(this.AddNo)) {
      user.AddNo = this.userData.AddNo
    }
    if (!this.validateservice.validateUndefined(this.FirstName)) {
      user.FirstName = this.userData.FirstName
    }
    if (!this.validateservice.validateUndefined(this.LastName)) {
      user.LastName = this.userData.LastName
    }
    if (!this.validateservice.validateUndefined(this.MiddleName)) {
      user.MiddleName = this.userData.MiddleName
    }
    console.log(user);

    this.userservice.updateUserProfile(user).subscribe(result => {
      console.log(result);
      this.updateedusr = result.data;
      console.log(this.updateedusr);
    })
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
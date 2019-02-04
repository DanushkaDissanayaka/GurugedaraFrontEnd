import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../Services/validate.service';
import { NotificationsService } from '../Services/notifications.service';
import { UserServiceService } from '../Services/user-service.service';
import {Router} from '@angular/router';
//import { from } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  FirstName: string;
  MiddleName: string;
  LastName: string;
  DOB: any;
  NIC: string;
  ContactNo: string;
  StreetNo: string;
  StreetName: string;
  City: string;
  Password: string;
  ConfPassword: string;
  studentId: string;
  username: string;
  email: string;
  role = "guardian";

  constructor(
    private validateService: ValidateService,
    private notificationserivice: NotificationsService,
    private userServiceservice: UserServiceService,
    private router:Router,
  ) { }

  ngOnInit() {
  }

  // addNIC(value) {
  //   //console.log(value);
  //   if (value.length < 10) {
  //     console.log("Check nic number");
  //     this.showNOtification("please check your NIC number");
  //     return false; 
  //   }
  //   for (let i = 0; i < this.elements.length; i++) {
  //     if (this.elements[i] == value) {
  //       console.log("Already in place");
  //       this.showNOtification("Already inserted");
  //       return false;
  //     }
  //   }
  //   this.elements.unshift([value]);
  //   return false;
  // }

  // dltNic(value) {
  //   //console.log(value);
  //   for (let i = 0; i < this.elements.length; i++) {
  //     if (this.elements[i] == value) {
  //       this.elements.splice(i, 1);
  //     }
  //   }
  // }
  register() {
    const user = {
      DOB: this.DOB,
      ContactNo: this.ContactNo,
      guardianNIC : this.NIC,
      password: this.Password,
      repassword: this.ConfPassword,
      AddStreet: this.StreetName,
      AddCity: this.City,
      AddNo: this.StreetNo,
      FirstName: this.FirstName,
      LastName: this.LastName,
      MiddleName: this.MiddleName,
      role: this.role,
      StudentUserId:this.studentId,
      username:this.username,
      email:this.email
    }
    //console.log(this.elements.length);


    // Required Fields
    if (this.FirstName == undefined) {
      console.log('First name is required');
      this.notificationserivice.alertWarning('First name is required');
      return false;
    }

    if (this.LastName == undefined) {
      console.log('Last name is required');
      this.notificationserivice.alertWarning('Last name is required');
      return false;
    }

    if (this.DOB == undefined) {
      console.log('Birthday is required');
      this.notificationserivice.alertWarning('Birthday is required');
      return false;
    }

    if (this.NIC == undefined) {
      console.log('NIC is required');
      this.notificationserivice.alertWarning('NIC is required');
      return false;
    }

    if (this.ContactNo == undefined) {
      console.log('Contact number is required');
      this.notificationserivice.alertWarning('Contact number is required');
      return false;
    }

    if (this.StreetName == undefined || this.City == undefined) {
      console.log('Street and City of address fields are required');
      this.notificationserivice.alertWarning('Street and city of address fields are required');
      return false;
    }

    if (this.username == undefined ) {
      console.log('User name is required');
      this.notificationserivice.alertWarning('User name is required');
      return false;
    }

    if (this.studentId == undefined ) {
      console.log('Student Id is required');
      this.notificationserivice.alertWarning('Student Id is required');
      return false;
    }

    if (this.Password == undefined) {
      console.log('Password is required');
      this.notificationserivice.alertWarning('Password is required');
      return false;
    }

    if (this.ConfPassword == undefined) {
      console.log('Password confirmation is required');
      this.notificationserivice.alertWarning('Password confirmation is required');
      return false;
    }


    // if (!this.validateService.validateRegister(user)) {
    //console.log('Please fill in all fields');
    // console.log('Please fill in all fields');
    // this.showNOtification ('Please fill in all fields');
    // return false;
    // }

    // validate email

    if (!this.validateService.validatePassword(user.password, this.ConfPassword)) {
      //console.log('Password not match');
      console.log('Password not match');
      this.notificationserivice.alertWarning('Password not match.Please re-enter your password');
      return false;
    }
    // Register user
    this.userServiceservice.registerGuardian(user).subscribe(data => {
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
    //console.log(user);
  }

}




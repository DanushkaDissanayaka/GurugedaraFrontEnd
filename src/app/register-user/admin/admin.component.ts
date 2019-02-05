import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../Services/validate.service';
import { UserServiceService } from '../../Services/user-service.service';
import { NotificationsService } from '../../Services/notifications.service';
//import { from } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  DOB: any
  email: string
  ContactNo: string
  password: string
  repassword: string
  AddStreet: string
  AddCity: string
  AddNo: string
  FirstName: string
  LastName: string
  MiddleName: string
  role: string="admin";
  constructor(
    private validateService: ValidateService,
    private userServiceservice: UserServiceService,
    private notificationserivice:NotificationsService
  ) { }

  ngOnInit() {
  }

  register() {
    const user = {
      DOB: this.DOB,
      email: this.email,
      ContactNo: this.ContactNo,
      password: this.password,
      repassword: this.repassword,
      AddStreet: this.AddStreet,
      AddCity: this.AddCity,
      AddNo: this.AddNo,
      FirstName: this.FirstName,
      LastName: this.LastName,
      MiddleName: this.MiddleName,
      role: this.role,
    }

    //console.log(user);


    // Required Fields
    if (this.FirstName == undefined || ! this.FirstName.match("^[A-Za-z]+$")) {
      console.log('First name is required');
      this.showNOtification ('First name is required and should be contained of alphabetic letters.');
      return false;
    }

    if (! this.MiddleName.match("^[A-Za-z]+$")) {
      console.log('Last name is required');
      this.showNOtification ('Middle name only can contain alphobetic letters.');
      return false;
    }

    if (this.LastName == undefined || ! this.LastName.match("^[A-Za-z]+$")) {
      console.log('Last name is required');
      this.showNOtification ('First name is required and should be contained of alphabetic letters.');
      return false;
    }

    // if (!this.validateService.validateRegister(user)) {
    //   //console.log('Please fill in all fields');
    //   console.log('Please fill in all fields');
    //   this.showNOtification ('Please fill in all fields');
    //   return false;
    // }

    if (this.DOB == undefined ) {
      console.log('Birthday is required');
      this.showNOtification ('Birthday is required');
      return false;
    }

    if (this.email == undefined || !this.email.match('^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$') ) {
      console.log('Email is required');
      this.showNOtification ('Email is required');
      return false;

    // validate email

    if (!this.validateService.validateEmail(user.email)) {
      //console.log('Please use valid email');
      console.log('Please use valid email');
      this.showNOtification('Please use valid email');
      return false;
    }
    if (!this.validateService.validatePassword(user.password, this.repassword)) {
      //console.log('Password not match');
      console.log('Password not match');
      this.showNOtification('Password not match');
      return false;
    }
    // Register user
    this.userServiceservice.registerEmployee(user).subscribe(data => {
      if (data.success) {
        //console.log("your now registerd");
        console.log(data.msg);
        this.notificationserivice.showNotification('top','right',data.msg,1);
      }
      else {
        //console.log("Something went wrong");
        console.log(data.msg);
        this.notificationserivice.showNotification('top','right',data.msg,4);
      }
    });
    //console.log(user);
  }

  showNOtification(msg){
    this.notificationserivice.showNotification('top','right',msg,3)
  }

}
}

import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../Services/validate.service';
import { UserServiceService } from '../../Services/user-service.service';
import { NotificationsService } from '../../Services/notifications.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
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
  role = "student";
  School: string
  Feetype = "full";
  elements: any = [];
  constructor(
    private validateService: ValidateService,
    private userServiceservice: UserServiceService,
    private notificationserivice:NotificationsService
  ) { }

  ngOnInit() {
  }
  addNIC(value) {
    //console.log(value);
    if (value.length < 10) {
      console.log("Check nic number");
      this.showNOtification("Check NIC number");
      return false; 
    }
    for (let i = 0; i < this.elements.length; i++) {
      if (this.elements[i] == value) {
        console.log("Already in place");
        this.showNOtification("Already inserted");
        return false;
      }
    }
    this.elements.unshift([value]);
    return false;
  }

  dltNic(value) {
    //console.log(value);
    for (let i = 0; i < this.elements.length; i++) {
      if (this.elements[i] == value) {
        this.elements.splice(i, 1);
      }
    }
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
      School: this.School,
      Feetype: this.Feetype,
      guardians: this.elements
    }
    //console.log(this.elements.length);

   
    // Required Fields
    if (this.FirstName == undefined ) {
      console.log('First name is required');
      this.showNOtification ('First name is required');
      return false;
    }

    if (this.LastName == undefined) {
      console.log('Last name is required');
      this.showNOtification ('Last name is required');
      return false;
    }

    if (this.DOB == undefined ) {
      console.log('Birthday is required');
      this.showNOtification ('Birthday is required');
      return false;
    }

    if (this.email == undefined ) {
      console.log('Email is required');
      this.showNOtification ('Email is required');
      return false;
    }

    if (this.ContactNo == undefined ) {
      console.log('Contact number is required');
      this.showNOtification ('Contact number is required');
      return false;
    }

    if (this.password == undefined ) {
      console.log('Password is required');
      this.showNOtification ('Password is required');
      return false;
    }

    if (this.repassword == undefined ) {
      console.log('Password confirmation is required');
      this.showNOtification ('Password confirmation is required');
      return false;
    }

    if (this.AddStreet == undefined || this.AddCity == undefined ) {
      console.log('Street and City of address fields are required');
      this.showNOtification ('All address fields are required');
      return false;
    }

     // Required Fields
     if (this.elements.length == 0) {
      console.log('You must Add atleast one guardian NIC');
      this.showNOtification ('You must Add atleast one guardian NIC');
      return false;
    }

    // if (!this.validateService.validateRegister(user)) {
      //console.log('Please fill in all fields');
      // console.log('Please fill in all fields');
      // this.showNOtification ('Please fill in all fields');
      // return false;
    // }

    // validate email

    if (!this.validateService.validateEmail(user.email)) {
      //console.log('Please use valid email');
      console.log('Please enter a valid Email');
      this.showNOtification('Please enter a valid Email');
      return false;
    }
    if (!this.validateService.validatePassword(user.password, this.repassword)) {
      //console.log('Password not match');
      console.log('Password not match');
      this.showNOtification('Password not match.Please re-enter your password');
      return false;
    }
    // Register user
    this.userServiceservice.registerStudent(user).subscribe(data => {
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
    this.notificationserivice.showNotification('top','right',msg,2)
  }

}

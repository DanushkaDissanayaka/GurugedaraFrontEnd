import { Component, OnInit } from '@angular/core';
import { UserServiceService } from './../services/user-service.service';
import { ClassService } from '../services/class.service';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  dropdownYear = "year"
  dropDownMonth = "Month"
  month = [
    { id: 0, name: "January" },
    { id: 1, name: "February" },
    { id: 2, name: "march" },
    { id: 3, name: "april" },
    { id: 4, name: "May" },
    { id: 5, name: "June" },
    { id: 6, name: "July" },
    { id: 7, name: "August" },
    { id: 8, name: "September" },
    { id: 9, name: "October" },
    { id: 10, name: "November" },
    { id: 11, name: "december" },
  ];
  year = [
    { id: 2015, value: "2015" },
    { id: 2016, value: "2016" },
    { id: 2017, value: "2017" },
    { id: 2018, value: "2018" },
    { id: 2019, value: "2019" },
  ];

  backMonth : any
  backYear : any
  classTitle: any
  studentName: any
  userid: string = "S100"
  guardianid: string = "G100"
  role = "student"
  gurdianDetected:boolean = false;

  dropDownTitle = "Class Title"
  dropDownStName = "Student name"
  studentId: any
  classId: any
  payment:any


  constructor(
    private classservice: ClassService,
    private userservice: UserServiceService
  ) { }

  ngOnInit() {

    this.role = localStorage.getItem('role');
    console.log(this.role);
    this.guardianid = localStorage.getItem('userId');
    this.userid = localStorage.getItem('userId');

    if (this.role == "guardian") {
      this.userservice.getStudentIdFromGuardianId({ username: this.guardianid }).subscribe(result => {
        console.log(result);
        this.studentName = result.data;
      })
      this.gurdianDetected = true;
    }
    else {
      this.getstudentClass(this.userid);
    }
  }

  setDropDwonName(id : any,name : string){
    this.dropdownYear = name;
    this.backYear = id;
  }
  setDropDwonName2(id: string, value: string) {
    this.dropDownMonth = value;
    this.backMonth = id+1;

  }

  setClasstitle(id: string, values: string) {
    this.dropDownTitle = values;
    this.classId = id;
  }

  showDetails() {
    console.log(this.dropdownYear);
    console.log(this.dropDownMonth);
    console.log(this.classId);
  }

  setStudentName(id: string, value: string) {
    this.dropDownStName = value;
    this.studentId = id;
    this.getstudentClass(id);
  }
  getstudentClass(studentId: any) {
    this.classservice.getStudentEnrolledClass({ userId: studentId }).subscribe(result => {
      console.log(result);
      this.classTitle = result.data;
      console.log(this.classTitle[0]);
    });

}
getPayment() {
  this.classservice.getStudentPaymentDetails({ UserId: this.userid, ClassId: this.classId ,month: this.backMonth, year: this.backYear}).subscribe(result => {
    console.log(result);
    this.payment = result.data;
    console.log(this.payment);
  })
}
}

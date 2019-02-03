import { AuthService } from './../services/auth.service';
import { UserServiceService } from './../services/user-service.service';
import { Component, OnInit } from '@angular/core';
import { ClassService } from '../services/class.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  classTitle: any
  studentName: any
  public backMonth;
  public backYear;
  userid: string;
  guardianid: string;
  role: string ;
  gurdianDetected: boolean = false;
  attendance: any

  dropDownname = "year";
  dropDownMonth = "Month"
  dropDownTitle = "Class Title"
  dropDownStName = "Student name"
  studentId: any
  classId: any
  Month: string
  year: any

  Year = [
    { id:2015, value:"2015"},
    { id:2016, value:"2016"},
    { id:2017, value:"2017"},
    { id:2018, value:"2018"},
    { id:2019, value:"2019"},
  ]

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


  constructor(
    private classservice: ClassService,
    private userservice: UserServiceService,
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

  //calling to service file

  setDropDwonName(name) {
    this.dropDownname = name;
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
    console.log(this.dropDownname);
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

  getAttendance() {
    this.classservice.getStudentAttendanceDetails({ UserId: this.userid, ClassId: this.classId , month: this.backMonth , year:this.backYear}).subscribe(result => {
      console.log(result);
      this.attendance = result.data;
      console.log(this.attendance);
    })
  }


}


import { Component, OnInit } from '@angular/core';
import { ClassService } from '../services/class.service';
import { UserServiceService } from './../services/user-service.service';

@Component({
  selector: 'app-timetable',
  templateUrl: './timetable.component.html',
  styleUrls: ['./timetable.component.scss']
})
export class TimetableComponent implements OnInit {

  userId:string
  role:string
  gurdianDetectflag :boolean = false
  studentName: string
  guardianid: string
  dropDownStName: string
  studentId: any
  classTitle: any

  constructor(
    private classservice: ClassService,
    private userservice: UserServiceService,
  ) { }

  ngOnInit() {
    this.userId = localStorage.getItem("userId");
    this.role = localStorage.getItem("role");

    if(this.role =="guardian"){
      this.gurdianDetectflag = true;

      this.userservice.getStudentIdFromGuardianId({ username: this.guardianid }).subscribe(result => {
        console.log(result);
        this.studentName = result.data;
        console.log(this.studentName);

      })
    }
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

}

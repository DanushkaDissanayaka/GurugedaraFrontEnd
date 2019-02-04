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
  dropDownStName: string = "Student name"
  studentId: any
  classTitle: any
  classDetails: any
  

  constructor(
    private classservice: ClassService,
    private userservice: UserServiceService,
  ) { }

  ngOnInit() {
    this.userId = localStorage.getItem("userId");
    this.role = localStorage.getItem("role");

    if(this.role =="guardian"){
      this.gurdianDetectflag = true;

      this.userservice.getStudentIdFromGuardianId({ username: this.userId }).subscribe(result => {
        console.log(result);
        this.studentName = result.data;
        console.log(this.studentName);

      })
    }

    else{
      this.getClassDetail()
    }
  }

  setStudentName(id: string, value: string) {
    this.dropDownStName = value;
    console.log(this.dropDownStName);
    this.studentId = id;
    this.getstudentClass(id);
  }

  getstudentClass(studentId: any) {
    this.classservice.getStudentEnrolledClass({ userId: studentId }).subscribe(result => {
      console.log(result);
      this.classTitle = result.data;
      console.log(this.classTitle);
    });
  }

  getClassDetail(){
    this.classservice.getClassDetails().subscribe(result => {
      console.log(result);
      this.classDetails = result.data;
      console.log(this.classTitle);
    });
  }

  // getClassDetails() {
  //   let headers = new Headers();
  //   headers.append('Cotent-type', 'application/json');
  //   return this.http.get(hostAddress + '/class/getClassDetails', { headers: headers })
  //     .pipe(map(res => res.json()));
  // }

}

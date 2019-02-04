import { Component, OnInit } from '@angular/core';
import { ClassService } from 'app/services/class.service';
import { NotificationsService } from '../services/notifications.service'
import { ValidateService } from '../services/validate.service'
import { UserServiceService } from '../services/user-service.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-enroll-student',
  templateUrl: './enroll-student.component.html',
  styleUrls: ['./enroll-student.component.scss'],
  providers: [ClassService]
})
export class EnrollStudentComponent implements OnInit {

  dropDownTitle = "Select class"
  classList: any[]
  classId: any
  classTitle: any
  StudentID: any
  OfficeuserId: any


  constructor(private validateservice: ValidateService,
    private notificationservice: NotificationsService,
    private classservice: ClassService,
    private userservice: UserServiceService,
    private authservice: AuthService) { }

  ngOnInit() {
    //this.getstudentClass()
  }


  valuechange(newValue) {
    this.classTitle = [];
    this.dropDownTitle = "Select class";
    this.userservice.findUser({ userId: newValue }).subscribe(data => {
      if (data.data.length) {
        if (data.data[0].role == 'student') {
          this.notificationservice.alertInfo("User found " + data.data[0].FirstName + " " + data.data[0].LastName);
          this.getstudentClass();
        }
      }
    });
  }


  getstudentClass() {
    this.classservice.getClassDetails().subscribe(result => {
      console.log(result);
      this.classTitle = result.data;
    });
  }




  setClasstitle(value) {
    this.dropDownTitle = value.Title;
    this.classId = value.ClassID;
  }

  onSubmit() {
    const data = {
      userId: this.StudentID,
      classId: this.classId,

    


    }

    if(!this.validateservice.validateUndefined(this.StudentID)){
      this.notificationservice.alertWarning("Enter Student index number");
      return false;
    }

    if(!this.validateservice.validateUndefined(this.classId)){
      this.notificationservice.alertWarning("Select Class to unenroll");
      return false;
    }

    console.log(data);


    if (confirm('Are you sure? you want to submit')) {
      this.authservice.enrollStudent(data).subscribe(data => {  //auth service.ts
        if (data.success) {
          this.notificationservice.alertInfo(data.msg);
          this.StudentID = ""
          this.classId = ""
          this.dropDownTitle = "Select class"
        }
        else {
          this.notificationservice.alertDanger(data.msg);
        }
      })
    } else {
      // Do nothing!
    }
  }




}

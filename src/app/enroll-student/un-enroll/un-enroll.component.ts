import { Component, OnInit } from '@angular/core';
import { ClassService } from 'app/services/class.service';
import { NotificationsService } from '../../services/notifications.service'
import { ValidateService } from '../../services/validate.service'
import { UserServiceService } from '../../services/user-service.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-un-enroll',
  templateUrl: './un-enroll.component.html',
  styleUrls: ['./un-enroll.component.scss']
})
export class UnEnrollComponent implements OnInit {


  dropDownTitle = "Select ClassID"
  classList: any[]
  classId:any
  classTitle:any
 // feedate:any
  //amount:any
  studentID:any
  OfficeuserId:any

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
          this.studentID = newValue;
          this.notificationservice.alertInfo("User found " + data.data[0].FirstName + " " + data.data[0].LastName);
          this.getstudentClass(newValue);
        }
      }
    });
  }

  getstudentClass(studentId:string) {
    this.classservice.getStudentEnrolledClass({userId:studentId}).subscribe(result => {
      console.log(result);
      this.classTitle = result.data;
    });
  }

  setClasstitle(value) {
    this.dropDownTitle = value.Title;
    this.classId = value.ClassID;
    
  }
  onSubmit() {

    if(!this.validateservice.validateUndefined(this.studentID)){
      this.notificationservice.alertWarning("Enter Student index number");
      return false;
    }

    if(!this.validateservice.validateUndefined(this.classId)){
      this.notificationservice.alertWarning("Select Class to unenroll");
      return false;
    }

    const data = {
      userId: this.studentID,
      classId: this.classId,
    
    }
    console.log(data);


    if (confirm('Are you sure? you want to submit')) {
      this.authservice. UnenrollStudent(data).subscribe(data => {  //auth service.ts
        if (data.success) {
          this.notificationservice.alertInfo(data.msg);

          this.studentID=undefined
          this.classId=undefined
          this.dropDownTitle = "Select ClassID"
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

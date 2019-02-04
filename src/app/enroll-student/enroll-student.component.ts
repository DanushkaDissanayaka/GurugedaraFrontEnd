import { Component, OnInit } from '@angular/core';
import { ClassService } from 'app/services/class.service';
import { NotificationsService } from '../services/notifications.service'
import { ValidateService } from '../services/validate.service'
import { UserServiceService } from '../services/user-service.service';

@Component({
  selector: 'app-enroll-student',
  templateUrl: './enroll-student.component.html',
  styleUrls: ['./enroll-student.component.scss'],
  providers: [ClassService]
})
export class EnrollStudentComponent implements OnInit {

  dropDownTitle = "Select ClassID"
  classList: any[]
  classId:any
  classTitle:any


  constructor(private validateservice: ValidateService,
    private notificationservice: NotificationsService,
    private classservice: ClassService,
    private userservice: UserServiceService) { }

  ngOnInit() {
    this.getstudentClass()
  }



  // valuechange(newValue) {
  //   this.userservice.findUser({ userId: newValue }).subscribe(data => {
  //     if (data.data.length) {
  //       if (data.data[0].role == 'student') {
  //         this.notificationservice.alertInfo("User found " + data.data[0].FirstName + " " + data.data[0].LastName);
  //         this.getstudentClass(newValue);
  //       }
  //     }
  //   });
  // }


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


 

}

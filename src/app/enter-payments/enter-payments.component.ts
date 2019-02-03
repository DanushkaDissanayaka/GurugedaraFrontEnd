import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../services/validate.service';
import { NotificationsService } from '../services/notifications.service';
import { ClassService } from '../services/class.service';
import { UserServiceService } from '../services/user-service.service';



@Component({
  selector: 'app-enter-payments',
  templateUrl: './enter-payments.component.html',
  styleUrls: ['./enter-payments.component.scss'],
  providers: [ClassService]
})
export class EnterPaymentsComponent implements OnInit {

  dropDownTitle = "Class Title"
  classTitle: any[]
  studentId: any
  classId: any

  constructor(private validateservice: ValidateService,
    private notificationservice: NotificationsService,
    private classservice: ClassService,
    private userservice: UserServiceService) { }

  ngOnInit() {

  }

  valuechange(newValue) {
    this.userservice.findUser({ userId: newValue }).subscribe(data => {
      if (data.data.length) {
        if (data.data[0].role == 'student') {
          this.notificationservice.alertInfo("User found " + data.data[0].FirstName + " " + data.data[0].LastName);
          this.getstudentClass(newValue);
          this.studentId = newValue;
        }
      }
    });
  }


  getstudentClass(studentId: any) {
    this.classservice.getStudentEnrolledClass({ userId: studentId }).subscribe(result => {
      console.log(result);
      this.classTitle = result.data;
    });
  }

  setClasstitle(id: string, values: string) {
    this.dropDownTitle = values;
    this.classId = id;
  }

  submit(){

  }

}

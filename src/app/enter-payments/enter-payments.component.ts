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
  OfficeuserId: string
  studentID: any
  classId: any
  amount: any = "Amount"
  feedate: any

  constructor(private validateservice: ValidateService,
    private notificationservice: NotificationsService,
    private classservice: ClassService,
    private userservice: UserServiceService) { }

  ngOnInit() {
    this.OfficeuserId = localStorage.getItem("userId");
  }

  valuechange(newValue) {
    this.userservice.findUser({ userId: newValue }).subscribe(data => {
      if (data.data.length) {
        if (data.data[0].role == 'student') {
          this.notificationservice.alertInfo("User found " + data.data[0].FirstName + " " + data.data[0].LastName);
          this.getstudentClass(newValue);
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

  setClasstitle(value) {
    this.dropDownTitle = value.Title;
    this.classId = value.ClassID;
    this.amount = value.fullFee;


  }

  submit() {
    const data = {
      StudentId: this.studentID,
      OfficeuserId: this.OfficeuserId,
      ClassId: this.classId,
      atDate: this.feedate,
      amount: this.amount
    }
    console.log(data);


    if (confirm('Are you sure? you want to submit')) {
      this.classservice.addFee(data).subscribe(data => {
        if (data.success) {
          this.notificationservice.alertInfo(data.msg);
          this.studentID=""
          this.classId=""
          this.feedate=""
          this.amount=""

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


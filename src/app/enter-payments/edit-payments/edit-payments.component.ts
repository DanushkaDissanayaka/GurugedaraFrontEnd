import { Component, OnInit } from '@angular/core';
import { ClassService } from 'app/services/class.service';
import { NotificationsService } from '../../services/notifications.service'
import { ValidateService } from '../../services/validate.service'
import { UserServiceService } from '../../services/user-service.service';


@Component({
  selector: 'app-edit-payments',
  templateUrl: './edit-payments.component.html',
  styleUrls: ['./edit-payments.component.scss']
})
export class EditPaymentsComponent implements OnInit {

  dropDownName = "Select Class"
  classList: any[]
  studentList: any[]
  marks = []
  classId: any
  userData: any

  constructor(private validateservice: ValidateService,
    private notificationservice: NotificationsService,
    private classservice: ClassService,
    private userservice: UserServiceService) { }

  ngOnInit() {
  }


  getStudentsOfClass(ClassID) {
    console.log(ClassID)
    this.classservice.getStudentsForClass({ ClassID: ClassID })
      .subscribe(result => {
        console.log(result)
        this.studentList = result.data
        console.log(this.studentList);
      })
  }


  setDropDownName(name) {

    this.getStudentsOfClass(name.ClassID);
    this.dropDownName = name.Title;
    this.classId = name.ClassID

  }

  getAllClassID() {
    this.classservice.getClassDetails()///class Service
      .subscribe(result => {

        this.classList = result.data

      })
  }

  valuechange(newValue) {
    console.log(newValue.target.value);
    console.log(newValue.target);

  }



  onSubmit() {
    if (confirm('Are you sure? you want to submit')) {
      this.classservice.getStudentsForClass({ marks: this.marks }).subscribe(data => {
        if (data.success) {
          this.notificationservice.alertInfo(data.msg);
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

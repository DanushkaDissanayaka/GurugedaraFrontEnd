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


  constructor(private validateservice: ValidateService,
    private notificationservice: NotificationsService,
    private classservice: ClassService,
    private userservice: UserServiceService) { }

  ngOnInit() {
  }


  getAllClassID() {
    this.classservice.getClasses()
      .subscribe(result => {
        // console.log(result.data)
        this.classList = result.data
        // console.log(this.classList);
      })
  }

  setClasstitle(value) {
    this.dropDownTitle = value.Title;
    this.classId = value.ClassID;
    


  }


 

}

import { Component, OnInit } from '@angular/core';
import { ClassService } from 'app/services/class.service';
import { NotificationsService } from '../services/notifications.service'
import { ValidateService } from '../services/validate.service'
import { UserServiceService } from '../services/user-service.service';


@Component({
  selector: 'app-view-student-details',
  templateUrl: './view-student-details.component.html',
  styleUrls: ['./view-student-details.component.scss'],
  providers: [ClassService]

})
export class ViewStudentDetailsComponent implements OnInit {


  StudentIdList: any[] = []
  studentNameList: any[] = []


  constructor( private validateservice: ValidateService,
    private notificationservice: NotificationsService,
    private classservice: ClassService,
    private userservice: UserServiceService ) { }

  ngOnInit() {
   
  }

  getStudentsOfClass(ClassID) {
    console.log(ClassID)
    this.classservice.getStudentsForClass({ ClassID: ClassID })
      .subscribe(result => {
        console.log(result)
        this.StudentIdList = result.data
        console.log(this.StudentIdList);
        +0
      })
  }



  

}

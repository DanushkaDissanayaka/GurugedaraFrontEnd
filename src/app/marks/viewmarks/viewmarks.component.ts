import { Component, OnInit } from '@angular/core';
import { ClassService } from 'app/services/class.service';
import { NotificationsService } from '../../services/notifications.service'
import { ValidateService } from '../../services/validate.service'
import { UserServiceService } from '../../services/user-service.service';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-viewmarks',
  templateUrl: './viewmarks.component.html',
  styleUrls: ['./viewmarks.component.scss'],
  providers: [ClassService]
})
export class ViewmarksComponent implements OnInit {
  
  dropDownName="Select classId"
  dropDownTitle ="Select Assignment Date"

  classList: any[]
  classId: any
  classTitle: any
  StudentID: any
  OfficeuserId: any


  constructor( private validateservice: ValidateService,
    private notificationservice: NotificationsService,
    private classservice: ClassService,
    private userservice: UserServiceService,
    private authservice: AuthService) { 
   
  }

  ngOnInit() {
    
  }

  valuechange(newValue) {
    this.classTitle = [];
    this.dropDownName = "Select class";
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
    this.dropDownName = value.Title;
    this.classId = value.ClassID;
  }


}

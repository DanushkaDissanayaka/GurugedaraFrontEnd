import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service'
import { NotificationsService } from '../../services/notifications.service'
import { ClassService } from '../../services/class.service';
import { UserServiceService } from '../../services/user-service.service'

@Component({
  selector: 'app-addclass',
  templateUrl: './addclass.component.html',
  styleUrls: ['./addclass.component.scss']
})
export class AddclassComponent implements OnInit {


  ClassID: String;
  subjectID: String;
  locationID: String;
  teacherID: String;
  dateOfWeek: String;
  halfFee: String;
  fullFee: String;
  startTime: String;
  endTime: String;
  description: String;
  Title: String;

  elements: any;
  subject: any;

  subjectDropdown = "Select Subject"
  LocationDropdown = "Select location"
  dateofweekDropdown = "Select Date"
  dateofweekarray = [{ id: 0, name: "Sunday" },
  { id: 1, name: "Monday" },
  { id: 2, name: "Tuesday" },
  { id: 3, name: "Wednesday" },
  { id: 4, name: "Thursday" },
  { id: 5, name: "Friday" },
  { id: 6, name: "Saturday" }]
  constructor(
    private validateservice: ValidateService,
    private notificationservice: NotificationsService,
    private classservice: ClassService,
    private userservice: UserServiceService
  ) { }

  ngOnInit() {
    this.classservice.getLocation().subscribe(data => {
      console.log(data);
      this.elements = data.data;
    });
    this.classservice.getsubjects().subscribe(data => {
      console.log(data);
      this.subject = data.data;
    });

  }
  subjectDropDwon(id: string, value: string) {
    this.subjectID = id;
    this.subjectDropdown = value
  }
  classDropDwon(id: string, value: string) {
    this.locationID = id;
    this.LocationDropdown = value
  }
  dateDropDwon(id: string, value: string) {
    this.dateOfWeek = id;
    this.dateofweekDropdown = value
  }
  register() {
    const data = {
      ClassID: this.ClassID,
      subjectID: this.subjectID,
      locationID: this.locationID,
      teacherID: this.teacherID,
      dateOfWeek: this.dateOfWeek,
      halfFee: this.halfFee,
      fullFee: this.fullFee,
      startTime: this.startTime,
      endTime: this.endTime,
      description: this.description,
      Title: this.Title
    }
    console.log(data);

    if (!this.validateservice.validateUndefined(data.Title)) {
      this.notificationservice.alertWarning("Please enter class Title")
      return false;
    }
    if (!this.validateservice.validateUndefined(data.teacherID)) {
      this.notificationservice.alertWarning("Please enter teacherID")
      return false;
    }
   



    
    if (!this.validateservice.validateUndefined(data.ClassID)) {
      this.notificationservice.alertWarning("Please enter valide class Id")
      return false;
    }
    if (!this.validateservice.validateUndefined(data.subjectID)) {
      this.notificationservice.alertWarning("Please select subject")
      return false;
    }
    if (!this.validateservice.validateUndefined(data.locationID)) {
      this.notificationservice.alertWarning("Please select location")
      return false;
    }
    // if (!this.validateservice.validateUndefined(data.teacherID)) {
    //   this.notificationservice.alertWarning("Please enter teacher Id")
    //   return false;
    // }
    if (!this.validateservice.validateUndefined(data.dateOfWeek)) {
      this.notificationservice.alertWarning("Please select Date")
      return false;
    }
    if (!this.validateservice.validateUndefined(data.halfFee)) {
      this.notificationservice.alertWarning("Please enter half fee")
      return false;
    }
    if (!this.validateservice.validateUndefined(data.fullFee)) {
      this.notificationservice.alertWarning("Please enter full fee")
      return false;
    }
    if (!this.validateservice.validateUndefined(data.startTime)) {
      this.notificationservice.alertWarning("Please decide class start time")
      return false;
    }
    if (!this.validateservice.validateUndefined(data.endTime)) {
      this.notificationservice.alertWarning("Please decide class end time")
      return false;
    }
    // if (!this.validateservice.validateUndefined(data.endTime)) {
    //   this.notificationservice.alertWarning("Please Enter title for clase")
    //   return false;
    // }
    // if (!this.validateservice.validateUndefined(data.description)) {
    //   this.notificationservice.alertWarning("Please enter description")
    //   return false;
    // }

    this.classservice.addClass(data).subscribe(result => {
      if (result.success == true) {
        // console.log(result.msg);
         this.notificationservice.alertInfo(result.msg);
         this.ClassID=""
         this.subjectID=""
         this.locationID=""
         this.teacherID=""
         this.dateOfWeek=""
         this.halfFee=""
         this.fullFee=""
         this.startTime=""
         this.endTime=""
         this.description=""
         this.Title=""



        
      }
      else {
        // console.log(result.msg);
        this.notificationservice.alertDanger(result.msg);
      }
    });
  }

  valuechange(newValue) {
    this.userservice.findUser({ userId: newValue }).subscribe(data => {
      if (data.data.length) {
        if (data.data[0].role == 'teacher') {
          this.notificationservice.alertInfo("User found " + data.data[0].FirstName + " " + data.data[0].LastName)
        }
      }
    });
  }

}

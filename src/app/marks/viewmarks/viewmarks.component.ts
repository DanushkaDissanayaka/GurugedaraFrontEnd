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
  
  dropDownName = "Select Class"
  classList: any[]
  studentList: any[]
  marks = []
  classId: any
 // marks: any

//variable for card
  // name: string =""
  // fullname: string=""
  // address: string=""
  // email: string =""
  // tel: string =""
  // dob: string =""


  constructor( private validateservice: ValidateService,
    private notificationservice: NotificationsService,
    private classservice: ClassService,
    private userservice: UserServiceService,
    private authservice: AuthService) { 
   
  }

  ngOnInit() {
    this.getAllClassID()
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

  // getStudentsMarksDetails(ClassID) {
  //   console.log(ClassID)
  //   this.classservice.getStudentsForClass({  marks:  mark })
  //     .subscribe(result => {
  //       console.log(result)
  //       this.studentList = result.data
  //       console.log(this.studentList);
  //     })
  // }



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

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


  dropDownName = "Select Class"
  classList: any[]
  studentList: any[]
  marks = []
  classId: any
  userData: any

  // veriable for card
  name: string =""
  fullname: string=""
  address: string=""
  email: string =""
  tel: string =""
  dob: string =""

  constructor(private validateservice: ValidateService,
    private notificationservice: NotificationsService,
    private classservice: ClassService,
    private userservice: UserServiceService) { }

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

  setuserId(Id:any){
    console.log(this.studentList[Id]);
    this.name= this.studentList[Id].LastName;
    this.fullname= this.studentList[Id].FirstName + " " + this.studentList[Id].MiddleName + " " + this.studentList[Id].LastName
    this.address= this.studentList[Id].AddNo + " " +this.studentList[Id].AddStreet +" "+ this.studentList[Id].AddCity;
    this.email = this.studentList[Id].Email;
    this.tel = this.studentList[Id].ContactNo;
  
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


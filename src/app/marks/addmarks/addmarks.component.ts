import { Component, OnInit } from '@angular/core';
import { ClassService } from 'app/services/class.service';
import { NotificationsService } from '../../services/notifications.service'
import { ValidateService } from '../../services/validate.service'


@Component({
  selector: 'app-addmarks',
  templateUrl: './addmarks.component.html',
  styleUrls: ['./addmarks.component.scss'],
  providers: [ClassService]
})
export class AddmarksComponent implements OnInit {

  dropDownName = "Select ClassID"
  classList: any[] = []
  studentList: any[] = []
  marks = []

  classId: string;
  date: any;
  description: string;

  constructor(
    private Classes: ClassService,
    private notification: NotificationsService,
    private validateservice: ValidateService,
    
  ) { }

  ngOnInit() {
    this.getAllClassID()
  }

  setDropDownName(name) {
    
    this.getStudentsOfClass(name.ClassID);
    this.dropDownName = name.Title;
    this.classId = name.ClassID

  }

  getAllClassID() {
    this.Classes.getClasses() ///class Service
      .subscribe(result => {
       
        this.classList = result.data
      
      })
  }

  getStudentsOfClass(ClassID) {
    console.log(ClassID)
    this.Classes.getStudentsForClass({ ClassID: ClassID })
      .subscribe(result => {
        console.log(result)
        this.studentList = result.data
        console.log(this.studentList);
        +0
      })
  }

  valuechange(newValue) {
    console.log(newValue.target.value);
    console.log(newValue.taeget);

    this.date= "";
    this.dropDownName = "Select class";
    this.description ="";

  }



  
  collectmarks(a, id) {

    // if (!this.validateservice.validateUndefined(this.date)) {
    //   this.notification.alertWarning("Date shuld not be empty");
    //   a.target.value = "";
    //   return false;
    // }

    //if (!this.validateservice.validateUndefined(this.description)) {
    //  this.notification.alertWarning("Add discription first");
     // a.target.value = "";
     // return false;
    //}

    if (!this.validateservice.validateUndefined(this.classId)) {
      this.notification.alertWarning("Select Class First")
      a.target.value = "";
      return false;
    }

    if (parseInt(a.target.value) > 100 || parseInt(a.target.value) < 0) {
      this.notification.alertWarning("Enter valid mark");
      a.target.value = "";
      return false;
    }

    let student = [
      id,
      this.classId,
      this.date,
      a.target.value,
      this.description,
    ]

    let index = null;

    for (let item of this.marks) {
      if (item[0] === id) {
        index = this.marks.indexOf(item);
        break;
      }
    }

    if (index === null) {
      this.marks.push(student);
    } else {
      this.marks.splice(index, 1);
      this.marks.push(student);
    }

    console.log(this.marks);
  }

  onSubmit() {
    const data = {
     // userId: this.StudentID,
      classId: this.classId,
      date:this.date,
      description:this.description
    


    }

    if(!this.validateservice.validateUndefined(this.classId)){
      this.notification.alertWarning("Select Class First");
      return false;
    }

    if(!this.validateservice.validateUndefined(this.date)){
      this.notification.alertWarning("Date should not be empty");
      return false;
    }

    if(!this.validateservice.validateUndefined(this.description)){
      this.notification.alertWarning("Add Description First");
      return false;
    }




    if (confirm('Are you sure? you want to submit')) {
      this.Classes.addmarks({marks:this.marks}).subscribe(data => {
        if (data.success) {
          this.notification.alertInfo(data.msg);
        }
        else {
          this.notification.alertDanger(data.msg);
        }
      })
    } else {
      // Do nothing!
    }
  }
} 
import { Component, OnInit } from '@angular/core';
import { ClassService } from 'app/services/class.service';

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

  constructor(
    private Classes: ClassService
  ) { }

  ngOnInit() {
    this.getAllClassID()
  }

  setDropDownName(name) {
    // console.log(name.ClassID)
    this.getStudentsOfClass(name.ClassID);
    this.dropDownName = name.Title;
    // console.log(this.dropDownName);
  }

  getAllClassID() {
    this.Classes.getClasses()
      .subscribe(result => {
        // console.log(result.data)
        this.classList = result.data
        // console.log(this.classList);
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

  }

  addMarks(){

  }

  
  collectmarks(a, id) {

    console.log(a);

    let student = [
      id,
      a.target.value
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

} 
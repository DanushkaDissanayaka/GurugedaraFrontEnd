import { Component, OnInit } from '@angular/core';
import { ClassService } from 'app/services/class.service';

@Component({
  selector: 'app-addmarks',
  templateUrl: './addmarks.component.html',
  styleUrls: ['./addmarks.component.scss'],
  providers: [ClassService]
})
export class AddmarksComponent implements OnInit {

  dropDownName ="Select ClassID"
  classList: any[]=[]
  studentList: any[]=[]

  constructor(
    private Classes: ClassService
  ) { }

  ngOnInit() {
    this.getAllClassID()
  }

  setDropDownName(name){
    // console.log(name.ClassID)
    this.getStudentsOfClass(name.ClassID);
    this.dropDownName = name.Title;
    // console.log(this.dropDownName);
  }
 
  getAllClassID(){
    this.Classes.getClasses()
      .subscribe(result => {
        // console.log(result.data)
        this.classList = result.data
        // console.log(this.classList);
      }) 
  }

  getStudentsOfClass(ClassID){
    console.log(ClassID)
    this.Classes.getStudentsForClass({ClassID:ClassID}) 
      .subscribe(result => {
        console.log(result)
        this.studentList = result.data
        console.log(this.studentList);
        +0
      })
  }
} 
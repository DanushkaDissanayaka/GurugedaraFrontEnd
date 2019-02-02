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
    this.getStudentsOfClass(name);
    this.dropDownName = name;
    console.log(this.dropDownName);
  }
 
  getAllClassID(){
    this.Classes.getClasses()
      .subscribe(result => {
        console.log(result.data)
        this.classList = result.data
        console.log(this.classList);
      }) 
  }

  getStudentsOfClass(ClassID){
    this.Classes.getStudentsForClass(ClassID)
      .subscribe(result => {
        console.log(result)
        this.studentList = result.data
        console.log(this.studentList);
      })
  }
} 
import { Component, OnInit } from '@angular/core';
import { ClassService } from 'app/services/class.service';

@Component({
  selector: 'app-viewmarks',
  templateUrl: './viewmarks.component.html',
  styleUrls: ['./viewmarks.component.scss'],
  providers: [ClassService]
})
export class ViewmarksComponent implements OnInit {
  
  dropDownName="Select classId"
  classList: any[]=[]
  studentList: any[]=[]



  constructor( private Classes: ClassService) { 
   
  }

  ngOnInit() {
    this.getAllClassID()
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

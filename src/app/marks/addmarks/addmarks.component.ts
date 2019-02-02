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

  constructor(
    private Classes: ClassService
  ) { }

  ngOnInit() {
    this.getAllClassID()
  }

  setDropDownName(name){
    this.dropDownName = name;
    console.log(this.dropDownName);
  }
 
  getAllClassID(){
    this.Classes.getclasses()
      .subscribe(result => {
        // for(var i=0; i<result.data.length; i++){
        //   this.classList = result.data
        // }
        console.log(this.classList);
      }) 
  }

}

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
  }

  setDropDownName(name){
    this.dropDownName = name;
    console.log(this.dropDownName);
  }

  getAllClassID(){
    this.Classes.getclasses()
      .subscribe(result => {
        this.classList = result.json().data
        console.log(this.classList);
      })
  }

}

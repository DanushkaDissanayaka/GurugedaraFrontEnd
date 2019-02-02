import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  dropDownname = "year"
  dropDownName2 = "month"

  constructor() { }

  ngOnInit() {
  }
 setDropDwonName(name){
   this.dropDownname = name;
 }

 setDropDwonName2(name){
  this.dropDownName2 = name;
}
}

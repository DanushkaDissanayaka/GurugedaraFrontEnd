import { Component, OnInit } from '@angular/core';
import { ClassService} from '../services/class.service';

@Component({
  selector: 'app-attendance',
  templateUrl: './attendance.component.html',
  styleUrls: ['./attendance.component.scss']
})
export class AttendanceComponent implements OnInit {

  classTitle : any 


  dropDownname = "year";
  dropDownMonth = "Month"
  dropDownTitle = "Class Title"
  classId : any
  month = [
    { id: 0, name: "January" },
    { id: 1, name: "February" },
    { id: 2, name: "march" },
    { id: 3, name: "april" },
    { id: 4, name: "May" },
    { id: 5, name: "June" },
    { id: 6, name: "July" },
    { id: 7, name: "August" },
    { id: 8, name: "September" },
    { id: 9, name: "October" },
    { id: 10, name: "November" },
    { id: 11, name: "december" },
  ];

  public backMonth;
  userid:string = "S100"
  constructor(
    private classservice : ClassService
  ) { }

  ngOnInit() {
    this.classservice.getStudentEnrolledClass({userId:this.userid}).subscribe(result =>{
      console.log(result);
      this.classTitle = result.data;
      console.log(this.classTitle[0]);
       
    });
  }
  setDropDwonName(name) {
    this.dropDownname = name;
  }

  setDropDwonName2(id: string, value: string) {
    this.dropDownMonth = value;
    this.backMonth = id;

  }

  setClasstitle(id : string , values : string){
    this. dropDownTitle = values;
    this. classId = id ;
  }

  showDetails(){
    console.log(this.dropDownname);
    console.log(this.dropDownMonth);
    console.log(this.classId);
  }
}

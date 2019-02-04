import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  constructor() { }
 userId:string
 role:string
 gurdianDetectflag :boolean = false
  ngOnInit() {
    this.userId = localStorage.getItem("userId");
    this.role = localStorage.getItem("role");
    if(this.role =="guardian"){
      this.gurdianDetectflag = true;
    }
    else if(this.role == "student"){

    }
    else{

    }
  }

}

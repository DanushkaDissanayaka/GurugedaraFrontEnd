import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.scss']
})
export class PaymentsComponent implements OnInit {

  dropdownYear = "year"


  constructor() { }

  ngOnInit() {
  }

  setDropDwonName(name : string){
    this.dropdownYear = name
  }

}

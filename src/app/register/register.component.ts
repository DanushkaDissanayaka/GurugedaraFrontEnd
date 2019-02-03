import { Component, OnInit } from '@angular/core';
// import { ValidateService } from '../../Services/validate.service';
// import { NotificationsService } from '../../Services/notifications.service';
// import { UserServiceService } from '../../Services/user-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  FirstName : string;
  MiddleName : string;
  LastName : string;
  DOB : any;
  NIC : string;
  ContactNo : string;
  StreetNo : string;
  StreetName : string;
  City : string;
  Password : string;
  ConfPassword : string;

  constructor(
    // private validateService: ValidateService,
    // private notificationserivice:NotificationsService,
    // private userServiceservice: UserServiceService,
  ) { }

  ngOnInit() {
  }

}

import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
    private notifications = [{title:"Notification1"},{title:"Notification2"}]
    private notificationNumber :any

    private msg = [{title:"message1"},{title:"MESSAGE2"},{title:"MESSAGE3"}]
    private messageNumber :any

    constructor(location: Location,  private element: ElementRef, private router: Router) {
    }

    ngOnInit(){
        this.notificationNumber = this.notifications.length;
        this.messageNumber = this.msg.length;
    }
    logout(){
        console.log("Logout works");
    }

}

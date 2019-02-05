import { Component, OnInit, ElementRef } from '@angular/core';
import { ROUTES } from '../sidebar/sidebar.component';
import {Location, LocationStrategy, PathLocationStrategy} from '@angular/common';
import { Router } from '@angular/router';
import {AuthService} from '../../services/auth.service'
import {NotificationsService} from '../../services/notifications.service'
import { async } from '@angular/core/testing';
import {UserServiceService} from '../../services/user-service.service';

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

    role:string
    userid:string

    constructor(location: Location,  private element: ElementRef, private router: Router , private authservice:AuthService , private userservice:UserServiceService) {
    }

    ngOnInit(){
        this.userid =localStorage.getItem("userId");
        this.role =localStorage.getItem("role");

        this.notificationNumber = this.notifications.length;
        this.messageNumber = this.msg.length;
        console.log(this.userid);
        
        this.userservice.findUser({ userId: this.userid }).subscribe(data =>{
            console.log(data);
            this.notificationNumber = data.data[0].NotificationFlag;
            this.messageNumber = data.data[0].MsgFlag;
        })
    }

    logout(){
        console.log("Logout works");
        this.router.navigate(['login']);
        this.authservice.logout();
    }

    msgclick(){
        
    }

    noticeClick(){

    }

}

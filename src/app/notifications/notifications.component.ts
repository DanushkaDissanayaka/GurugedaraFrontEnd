import { Component, OnInit } from '@angular/core';
import { NotificationsService } from '../services/notifications.service';
import { NoticeAndMessagesService } from './../services/notice-and-messages.service';
declare var $: any;
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  userId: string
  role: string
  data: any
  notification: any;
  message: any;
  message1: any;
  message2: any;



  constructor(
    private notificationserivice: NotificationsService,
    private noticem: NoticeAndMessagesService) { }


  ngOnInit() {
    this.userId = localStorage.getItem("userId")
    this.role = localStorage.getItem("role")

    const data = {
      userId: this.userId,
      role: this.role
    }

    this.noticem.getnotice(data).subscribe(data => {
      console.log(data);
      this.notification = data.data;
    });

  

    const data1 = {
      userId: this.userId
    }
    this.noticem.messageinbox(data).subscribe(data => {
      console.log(data);
      this.message1 = data.data;
    });

    this.noticem.messageoutbox(data).subscribe(data => {
      console.log(data);
      this.message2 = data.data;
    });

  }
  


  }

import { Component, OnInit } from '@angular/core';
import {NotificationsService} from'../services/notifications.service'
declare var $: any;
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  constructor(private notificationsservice : NotificationsService) { }
  notification:any;
  message:any;
  

  ngOnInit() {
    //this.notificationsservice.showNotification('top','left',"test notifiction",4)
    this.notification = [
      {title:"Title",message:"this is the message fot this notification",type:'assignment'},
      {title:"Title",message:"this is the message fot this notification",type:'assignment'},
    ]
    this.message = [
      {title:"Title",message:"this is the message fot this notification"},
      {title:"Title",message:"this is the message fot this notification"},
    ]
  }
}

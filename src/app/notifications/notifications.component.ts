import { Component, OnInit } from '@angular/core';
import {NotificationsService} from'../services/notifications.service';
import { NoticeAndMessagesService } from './../services/notice-and-messages.service';
declare var $: any;
@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.css']
})
export class NotificationsComponent implements OnInit {

  userId: string 
  role:string


  constructor(
    private notificationsservice : NotificationsService,
    private noticem: NoticeAndMessagesService,
    private notificationserivice: NotificationsService,
    
    
    ) { }
  notification:any;
  message:any;
  

  ngOnInit() {
    const userId=localStorage.getItem("userId");
    const role=localStorage.getItem("role");
    //this.notificationsservice.showNotification('top','left',"test notifiction",4)
const data ={
  userId:this.userId,
  role:this.message.role,
}

    this.noticem.getnotice(data).subscribe(data => {
      
      if (data.success) {
        console.log("your s");
        console.log(data.msg);
        this.notificationserivice.showNotification('top', 'right', data.msg, 1);
        console.log(data);
        
      }
      else {
        console.log("Something went wrong");
        console.log(data.msg);
        this.notificationserivice.showNotification('top', 'right', data.msg, 4);
      }
    });






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
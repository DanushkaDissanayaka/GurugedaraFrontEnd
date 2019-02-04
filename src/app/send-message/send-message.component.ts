import { Component, OnInit } from '@angular/core';
import { NoticeAndMessagesService } from './../services/notice-and-messages.service';
import { NotificationsService } from '../services/notifications.service';
import { ValidateService } from '../services/validate.service';

@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {

  role = "Select Reciver Role";
  resiverUserId:any;
  msg:any;
  title:any;
  //const userId=localStorage.getItem("userId");
  
  Role = [
    { name: "Student" },
    { name: "Gurdian" },
    
  ];


  

  constructor(
    private noticem: NoticeAndMessagesService,
    private notificationserivice: NotificationsService,
    private validateservice: ValidateService,
    private notificationservice: NotificationsService,
  ) { }

  ngOnInit() {
  }
  setDropDwonRole(value: string) {
    this.role = value;
    

  }

  send(){
    const data = {
      role :this.role,
      resiverUserId :this.resiverUserId,
      senderUserId :localStorage.getItem("userId"),
      msg:this.msg,
      title:this.title,

    }


 

    console.log(data);
    
    //console.log(data); 

    if (!this.validateservice.validateUndefined(data.role)) {
      this.notificationservice.alertWarning("Please select role")
      return false;
    }
    if (!this.validateservice.validateUndefined(data.resiverUserId)) {
      this.notificationservice.alertWarning("Please enter resiver id")
      return false;
    }
    if (!this.validateservice.validateUndefined(data.title)) {
      this.notificationservice.alertWarning("Please enter title")
      return false;
    }
    if (!this.validateservice.validateUndefined(data.msg)) {
      this.notificationservice.alertWarning("Please enter message")
      return false;
    }
    
    this.noticem.SendMessage(data).subscribe(data => {
      if (data.success) {
        console.log("message sent");
        console.log(data.msg);
        this.notificationserivice.showNotification('top', 'right', data.msg, 1);
        this.resiverUserId="",
        this.msg="",
        this.title=""
     
      }
      else {
        console.log("Something went wrong");
        console.log(data.msg);
        this.notificationserivice.showNotification('top', 'right', data.msg, 4);
      }
    });
  
  }



}

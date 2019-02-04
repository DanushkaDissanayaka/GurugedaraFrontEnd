import { Component, OnInit } from '@angular/core';
import { NoticeAndMessagesService } from './../services/notice-and-messages.service';
import { NotificationsService } from '../services/notifications.service';


@Component({
  selector: 'app-send-message',
  templateUrl: './send-message.component.html',
  styleUrls: ['./send-message.component.scss']
})
export class SendMessageComponent implements OnInit {

  SelectRole = "Select Reciver Role";
  StudentId:any;
  Message:any;
  
  Role = [
    { name: "Student" },
    { name: "Gurdian" },
    
  ];


  

  constructor(
    private noticem: NoticeAndMessagesService,
    private notificationserivice: NotificationsService
  ) { }

  ngOnInit() {
  }
  setDropDwonRole(value: string) {
    this.SelectRole = value;
    

  }

  send(){
    const data = {
  SelectRole:this.SelectRole,
  StudentId:this.StudentId,
  Message:this.Message

    }


    //console.log(data); 
    
    this.noticem.SendMessage(data).subscribe(data => {
      if (data.success) {
        console.log("your now registerd");
        console.log(data.msg);
        this.notificationserivice.showNotification('top', 'right', data.msg, 1);
      }
      else {
        console.log("Something went wrong");
        console.log(data.msg);
        this.notificationserivice.showNotification('top', 'right', data.msg, 4);
      }
    });

  }



}

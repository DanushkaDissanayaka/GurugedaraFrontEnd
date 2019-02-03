import { NoticeAndMessagesService } from './../services/notice-and-messages.service';
import { Component, OnInit } from '@angular/core';
import { ClassService } from 'app/services/class.service';
import { NotificationsService } from '../services/notifications.service';



@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.scss']
})
export class AddNotificationComponent implements OnInit {

  classDropdown = "Select ClassID"
  typedropDown = "Select notification type";
  classList: any;
  userId: string = "T100";
  TypeList: any[] = [];
  Title: any;
  Message: any;
  typeid:string
  classid:string



  constructor(
    private Classes: ClassService,
    private noticem: NoticeAndMessagesService,
    private notificationserivice: NotificationsService



  ) { }

  ngOnInit() {
    this.getAllClassID()
    this.getTypeID()

  }

  classdropfun(name: any, id:any) {
    this.classDropdown = name;
    this.classid = id
  }

  typedropfun(name: any,id:any) {
    this.typedropDown = name;
    this.typeid = id
  }



  getAllClassID() {
    this.Classes.getTeacherClasses({ userId: this.userId })
      .subscribe(result => {
        // console.log(result.data)
        this.classList = result.data
        // console.log(this.classList);
      })
  }

  getTypeID() {
    this.noticem.getnoticetype()
      .subscribe(result => {
        // console.log(result.data)
        this.TypeList = result.data
        // console.log(this.TypeList);
      })
  }

  add() {
    const data = {
      UserId:this.userId,
      ClassID:this.classid,
      title:this.Title,
      msg:this.Message,
      typeId:this.typeid
    }

    console.log(data); 
    
    this.noticem.SendNotification(data).subscribe(data => {
      if (data.success) {
        //console.log("your now registerd");
        console.log(data.msg);
        this.notificationserivice.showNotification('top', 'right', data.msg, 1);
      }
      else {
        //console.log("Something went wrong");
        console.log(data.msg);
        this.notificationserivice.showNotification('top', 'right', data.msg, 4);
      }
    });
  }

}

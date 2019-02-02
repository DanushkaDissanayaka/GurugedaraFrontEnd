import { Component, OnInit } from '@angular/core';
import { ClassService } from '../../services/class.service';
import { NotificationsService } from '../../services/notifications.service';
import { ValidateService } from '../../services/validate.service'

@Component({
  selector: 'app-addsubject',
  templateUrl: './addsubject.component.html',
  styleUrls: ['./addsubject.component.scss']
})
export class AddsubjectComponent implements OnInit {

  subjectId: string
  subjectName: string
  subject: any[]

  constructor(private validateservice: ValidateService,
    private notificationservice: NotificationsService,
    private classservice: ClassService, ) { }

  ngOnInit() {
    this.classservice.getsubjects().subscribe(data => {
      // console.log(data);
      this.subject = data.data;
    });
  }

  addSubject() {
    if (!this.validateservice.validateUndefined(this.subjectId)) {
      this.notificationservice.alertWarning("please enter subject ID");
      return false;
    }
    if (!this.validateservice.validateUndefined(this.subjectName)) {
      this.notificationservice.alertWarning("Please enter subject name");
      return false;
    }

    const data = {
      subjectName: this.subjectName,
      subjectId: this.subjectId
    }

    this.classservice.addSubject(data).subscribe(result => {
      if (result.success) {
        console.log(result.msg);
        this.notificationservice.alertInfo(result.msg);
        this.subject.unshift(data);
        this.subjectId = "";
        this.subjectName = "";
      }
      else {
        console.log(result.msg);
        this.notificationservice.alertInfo(result.msg);
      }
    })

  }

}

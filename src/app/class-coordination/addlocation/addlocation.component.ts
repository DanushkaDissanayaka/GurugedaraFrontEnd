import { Component, OnInit } from '@angular/core';
import { ClassService } from '../../services/class.service';
import { NotificationsService } from '../../services/notifications.service';
import { ValidateService } from '../../services/validate.service'

@Component({
  selector: 'app-addlocation',
  templateUrl: './addlocation.component.html',
  styleUrls: ['./addlocation.component.scss']
})
export class AddlocationComponent implements OnInit {

  locationID :string
  locationName :string
  elements: any

  constructor(
    private notificationservice: NotificationsService,
    private classservice: ClassService,
    private validateservice:ValidateService
  ) { }

  ngOnInit() {
    this.classservice.getLocation().subscribe(data => {
      console.log(data);
      this.elements = data.data;
    });
  }

  addlocation(){
    const data = {
      locationID:this.locationID,
      locationName: this.locationName
    }
    if(!this.validateservice.validateUndefined(data.locationID)){
      this.notificationservice.alertWarning("Please enter location ID")
      return false
    }
    if(!this.validateservice.validateUndefined(data.locationName)){
      this.notificationservice.alertWarning("Please enter location Name")
      return false
    }

    this.classservice.addLocation(data).subscribe(result =>{
      if(result.success == true){
        this.notificationservice.alertSucceess(result.msg)
        console.log(result.msg);
        this.locationID = ""
        this.locationName =""
      }
      else{
        console.log(result.msg);
        this.notificationservice.alertDanger(result.msg)
      }
    })
  }

}

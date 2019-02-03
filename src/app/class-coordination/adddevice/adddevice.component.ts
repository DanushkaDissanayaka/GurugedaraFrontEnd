import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service'
import { NotificationsService } from '../../services/notifications.service'
import { ClassService } from '../../services/class.service';
import { UserServiceService } from '../../services/user-service.service'

@Component({
  selector: 'app-adddevice',
  templateUrl: './adddevice.component.html',
  styleUrls: ['./adddevice.component.scss']
})
export class AdddeviceComponent implements OnInit {

  elements: any;
  devices: any;
  locationID: string
  deviceId:string
  devicetype:string
  LocationDropdown = "Select location"
  type = "Device type"
  typedata = [{name:"IN"},{name:"OUT"}]

  constructor(
    private validateservice: ValidateService,
    private notificationservice: NotificationsService,
    private classservice: ClassService,
  ) { }

  ngOnInit() {
    this.classservice.getLocation().subscribe(data => {
      // console.log(data);
      this.elements = data.data;
    });

    this.classservice.getDevice().subscribe(data => {
      // console.log(data);
      this.devices = data.data;
    });
  }

  classDropDwon(id: string, value: string) {
    this.locationID = id;
    this.LocationDropdown = value
  }

  typefunction(id: string, value: string) {
    this.devicetype = id;
    this.type = value
  }

  addDevice(){
    const data ={
      DeviceId:this.deviceId,
      locationID:this.locationID,
      type:this.devicetype,
    }

    if(!this.validateservice.validateUndefined(data.DeviceId)){
      this.notificationservice.alertWarning(" Device canotbe empty");
      return false;
    }
    
    if(!this.validateservice.validateUndefined(data.locationID)){
      this.notificationservice.alertWarning(" Location id canotbe empty");
      return false;
    }
    
    if(!this.validateservice.validateUndefined(data.type)){
      this.notificationservice.alertWarning("Type canotbe empty");
      return false;
    }
    // console.log(data);
    this.classservice.addDevice(data).subscribe(result =>{
      if(result.success == false){
        this.notificationservice.alertDanger(result.msg);
      }
      else{
        this.notificationservice.alertSucceess(result.msg);
        this.deviceId=""
        this.locationID = ""
        this.devicetype=""
      }
      
    })
  }

}

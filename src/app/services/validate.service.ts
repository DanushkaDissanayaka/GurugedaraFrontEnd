import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {

  constructor() { }

  validateRegister(user){
    if (user.FirstName==undefined||user.email==undefined||user.password==undefined||user.DOB==undefined) {
      return false;
    }
    else{
      return true;
    }
  }
  
  validateEmail(email){
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
  }

  validatePassword(password,cnfpassword){
    if(password == cnfpassword){
      return true;
    }
    else{
      return false;
    }
    
  }

  validateUndefined(data:any){
    if(data == undefined){
      return false;
    }
    else{
      return true;
    }
  }
  
  ConvertDayOfWeek(no: number){
    if(no==0){
      return "Sunday";
    }
    else if(no==1){
      return "Monday";
    }
    else if(no==2){
      return "Tuesday";
    }
    else if(no==3){
      return "Wednesday";
    }
    else if(no==4){
      return "Thursday";
    }
    else if(no==5){
      return "Friday";
    }
    else if(no==6){
      return "Saturday";
    }
  }

}

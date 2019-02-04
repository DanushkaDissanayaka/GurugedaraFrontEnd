import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

const hostAddress = "http://139.59.66.58:3000"//"http://localhost:3000" 

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private http:Http) { }

  registerUser(user){
    let headers = new Headers();
    headers.append('Cotent-type','application/json');
    return this.http.post( hostAddress +'/users/register',user,{headers: headers}) //http://localhost:3000/
      .pipe(map(res => res.json()));
  }

  registerStudent(user){
    let headers = new Headers();
    headers.append('Cotent-type','application/json');
    return this.http.post( hostAddress +'/users/studentRegister',user,{headers: headers}) //http://localhost:3000/
      .pipe(map(res => res.json()));
  }

  registerGuardian(user){
    let headers = new Headers();
    headers.append('Cotent-type','application/json');
    return this.http.post( hostAddress +'/users/register',user,{headers: headers}) //http://localhost:3000/
      .pipe(map(res => res.json()));
  }

  findUser(data){
    let headers = new Headers();
    headers.append('Cotent-type','application/json');
    return this.http.post(hostAddress+'/users/findUser',data,{headers: headers}) //http://localhost:3000/
      .pipe(map(res => res.json()));
  }

  registerEmployee(user){
    let headers = new Headers();
    headers.append('Cotent-type','application/json');
    return this.http.post( hostAddress +'/users/officeuserRegister',user,{headers: headers}) //http://localhost:3000/
      .pipe(map(res => res.json()));
  }

  getStudentIdFromGuardianId(data){ 
    let headers = new Headers();
    headers.append('Cotent-type','application/json');
    return this.http.post(hostAddress+'/users/getstudentFromGuardian',data,{headers: headers}) //http://localhost:3000/
    .pipe(map(res => res.json()));
  }

  updateUserProfile(data){ 
    let headers = new Headers();
    headers.append('Cotent-type','application/json');
    return this.http.post(hostAddress+'/users/updateUserProfile',data,{headers: headers}) //http://localhost:3000/
    .pipe(map(res => res.json()));
  }

  getgurdiandetails(data){ 
    let headers = new Headers();
    headers.append('Cotent-type','application/json');
    return this.http.post(hostAddress+'/users/getguardianDetails',data,{headers: headers}) //http://localhost:3000/
    .pipe(map(res => res.json()));
  }
  changepassword(data){ 
    let headers = new Headers();
    headers.append('Cotent-type','application/json');
    return this.http.post(hostAddress+'/users/changeUserpasswordAdmin',data,{headers: headers}) //http://localhost:3000/
    .pipe(map(res => res.json()));
  }

  
}


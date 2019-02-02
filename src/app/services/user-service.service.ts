import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

const hostAddress = "http://localhost:3000"//"http://localhost:3000" 

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
}

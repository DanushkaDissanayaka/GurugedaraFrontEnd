import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';


const hostAddress = "http://139.59.66.58:3000"//"http://localhost:3000" 


@Injectable({
  providedIn: 'root'
})
export class ClassService {

  constructor(private http:Http) { }

  getClasses(){
    let headers = new Headers();
    headers.append('Cotent-type','application/json');
    return this.http.get(hostAddress +'/class/getClassDetails',{headers: headers})
    .pipe(map(res => res.json()));
  }

  addClass(data){
    let headers = new Headers();
    headers.append('Cotent-type','application/json');
    return this.http.post(hostAddress+'/class/addClasses',data,{headers: headers}) //http://localhost:3000/
      .pipe(map(res => res.json()));
  }

  getLocation(){
    let headers = new Headers();
    headers.append('Cotent-type','application/json');
    return this.http.get(hostAddress+'/location/getLocation',{headers: headers}) //http://localhost:3000/
      .pipe(map(res => res.json()));
  }

  getsubjects(){
    let headers = new Headers();
    headers.append('Cotent-type','application/json');
    return this.http.get(hostAddress +'/subject/getSubject',{headers: headers})
    .pipe(map(res => res.json()));
  }

  addSubject(data){
    let headers = new Headers();
    headers.append('Cotent-type','application/json');
    return this.http.post(hostAddress+'/subject/addsubject',data,{headers: headers}) //http://localhost:3000/
      .pipe(map(res => res.json()));
  }

  addLocation(data){
    let headers = new Headers();
    headers.append('Cotent-type','application/json');
    return this.http.post(hostAddress+'/location/addlocation',data,{headers: headers}) //http://localhost:3000/
      .pipe(map(res => res.json()));
  }

  addDevice(data){
    let headers = new Headers();
    headers.append('Cotent-type','application/json');
    return this.http.post(hostAddress+'/device/addDevice',data,{headers: headers}) //http://localhost:3000/
      .pipe(map(res => res.json()));
  }

  getDevice(){
    let headers = new Headers();
    headers.append('Cotent-type','application/json');
    return this.http.get(hostAddress+'/device/getdevicedetails',{headers: headers}) //http://localhost:3000/
      .pipe(map(res => res.json()));
  }

   getStudentEnrolledClass(data){
    let headers = new Headers();
    headers.append('Cotent-type','application/json');
    return this.http.post(hostAddress+'/class/getclassDetailsFromStudentId',data,{headers: headers}) //http://localhost:3000/
    .pipe(map(res => res.json())); 
  }
  
  getStudentsForClass(ClassId){
    let headers = new Headers();
    headers.append('Cotent-type','application/json');
    return this.http.post(hostAddress +'/class/getAllstudentDetailsOfAclass',ClassId, {headers: headers})
    .pipe(map(res => res.json()));
  }

  getTeacherClasses(userId){
    let headers = new Headers();
    headers.append('Cotent-type','application/json');
    return this.http.post(hostAddress+'/class/ClassTitle',userId,{headers: headers}) //http://localhost:3000/
      .pipe(map(res => res.json()));
  }
}

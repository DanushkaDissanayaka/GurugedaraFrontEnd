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
<<<<<<< HEAD
   getStudentEnrolledClass(data){
    let headers = new Headers();
    headers.append('Cotent-type','application/json');
    return this.http.post(hostAddress+'/class/getclassDetailsFromStudentId',data,{headers: headers}) //http://localhost:3000/
=======

  getStudentsForClass(ClassId){
    let headers = new Headers();
    headers.append('Cotent-type','application/json');
    return this.http.post(hostAddress +'/class/getAllstudentDetailsOfAclass',ClassId, {headers: headers})
>>>>>>> 60f20441621a1f19a72ca158fc1a6bda5968c076
    .pipe(map(res => res.json()));
  }

 
  getTeacherClasses(userId){
    let headers = new Headers();
    headers.append('Cotent-type','application/json');
    return this.http.post(hostAddress+'/class/ClassTitle',userId,{headers: headers}) //http://localhost:3000/
      .pipe(map(res => res.json()));
  }
}

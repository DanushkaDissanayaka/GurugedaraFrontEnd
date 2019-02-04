import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

const hostAddress = "http://139.59.66.58:3000"//"http://localhost:3000"

@Injectable({
  providedIn: 'root'
})
export class NoticeAndMessagesService {

  constructor(private http:Http) { }

  ////////////////get type for notification component
getnoticetype(){
  let headers = new Headers();
  headers.append('Cotent-type','application/json');
  return this.http.get(hostAddress +'/notification/getNotificationType',{headers: headers})
  .pipe(map(res => res.json()));
}

getnotice(data){
  let headers = new Headers();
  headers.append('Cotent-type','application/json');
  return this.http.post(hostAddress +'/notification//getNotification',data,{headers: headers})
  .pipe(map(res => res.json()));
}

SendNotification(data){
  let headers = new Headers();
    headers.append('Cotent-type','application/json');
    return this.http.post( hostAddress +'/notification/addNotification',data,{headers: headers}) //http://localhost:3000/
      .pipe(map(res => res.json()));
}

///////dont delete it/////////

SendMessage(data){
  let headers = new Headers();
    headers.append('Cotent-type','application/json');
    return this.http.post( hostAddress +'/msg/message',data,{headers: headers}) //http://localhost:3000/
      .pipe(map(res => res.json()));
}





}

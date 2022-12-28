import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiCallService {

  constructor(private http:HttpClient) { }

  getDetails(){
    this.http.get('https://reqres.in/api/users/2').subscribe(res => {
        console.log(res)
      });
  }

  postDetails(payload: any){
    this.http.post('https://reqres.in/api/users',payload).subscribe(res => {
      console.log("In post res",res);
    })
  }


}

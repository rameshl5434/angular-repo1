import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiCallService } from './api-call.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
gotosrinu2() {
throw new Error('Method not implemented.');
}
gotosrinu() {
throw new Error('Method not implemented.');
}
gotoc2() {
throw new Error('Method not implemented.');
}
gotoc1() {
throw new Error('Method not implemented.');
}
  constructor(private router:Router,private http: HttpClient,private apiService: ApiCallService){
    let samplePayload= {
      "name": "morpheus",
      "job": "leader"
  };
    this.apiService.getDetails();
    this.apiService.postDetails(samplePayload);

    // this.http.get('https://reqres.in/api/users/2').subscribe(res => {
    //   console.log(res)
    // });
    
  }
  ngOnInit(): void {
    console.log('mahesh')
  }
    ngOnDestroy():(void){
      console.log('naresh')
        
    }
    s1(){
this.router.navigateByUrl('/srinu')
    }s2(){
      this.router.navigateByUrl('/srinu2')
    }
title='srinu'
  }


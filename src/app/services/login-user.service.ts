import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
  private baseUrl="http://192.168.137.102:9090";
   requestheader1=new HttpHeaders()
   .set("Content-Type","application/json");
  constructor(private http:HttpClient) { }
  login(data:String):Observable<object>{
return this.http.post(this.baseUrl+"/auth",data,{headers:this.requestheader1})
  }
}


import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable,  } from "rxjs";
import * as localStorage from 'nativescript-localstorage';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

user : any ;
AuthToken : any  ;
public url:String = "http://136.185.4.32:3002"

  constructor(private http : HttpClient) { 
    
  }

  registerUser(user) : Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type' , 'application/json');
    return this.http.post('http://136.185.4.32:3002/users/register' , user, {headers : headers});                                                               
  }

  authenticateUser(user): Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type' , 'application/json');
    return this.http.post('http://136.185.4.32:3002/users/authenticate' , user , {headers : headers})
  }


  getVideo(): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type' , 'application/json');
    return this.http.get('http://136.185.4.32:3002/users/video' ,  {headers : headers});
  }

  UpdateProfile(user): Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type' , 'application/json');
    return this.http.post('http://136.185.4.32:3002/users/update-profile' , user , {headers : headers})
  }

  UpdatePassword(user): Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type' , 'application/json');
    return this.http.post('http://136.185.4.32:3002/users/update-password' , user , {headers : headers})

  }

  forgotPassword(user) : Observable<any>{
    let headers = new HttpHeaders();
    headers.append('Content-Type' , 'application/json');
    return this.http.post('http://136.185.4.32:3002/users/forgotpassword' , user ,  {headers : headers});
  }

  StoreUserData(token , user){
    localStorage.setItem('id_token' , token );
    localStorage.setItem('user' , JSON.stringify(user));
    this.AuthToken = token ;
    this.user = user ;
  }
}

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AunthenticatedResponse } from '../models/AunthenticatedResponse.models';
import { Login } from '../models/login.models';
import { User } from '../models/register.models';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  baseApiUrl: string = environment.baseApiUrl;
  credentials: Login = {email:'',password:''};

  constructor(private http: HttpClient) { }
   // create a method to call api that is able to talk to our .net6api and read users.
   getAllUsers(): Observable <User[]>{
    return this.http.get<User[]>(this.baseApiUrl + '/api/Users');
  }

  //create a method to call api for adding user
  addUsers(addUserRequest:any):Observable<User[]>{
    return this.http.post<User[]>(this.baseApiUrl + '/api/Users',addUserRequest)
  }
  //create a method to call api for login with validations.
  loginUsers(addUser: any):Observable<AunthenticatedResponse>{
    return this.http.post<AunthenticatedResponse>(this.baseApiUrl + '/api/Auth/login', this.credentials, {
      headers: new HttpHeaders({ "Content-Type": "application/json" })
    });
    
  }
   //calling api for checking existence of an employee
   getAllUsersById(id: string):Observable<User>{
    return this.http.get<User>(this.baseApiUrl+'/api/employees/'+id);
  }
  //creates a method for logout
  // logOut(){
  //   this.isUserLoggedin = false;
  // }
  

  
}

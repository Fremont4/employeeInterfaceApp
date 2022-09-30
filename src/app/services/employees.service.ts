import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Employee } from '../models/employee.models';
import { Observable} from 'rxjs';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {
  baseApiUrl: string = environment.baseApiUrl;

  constructor(private http: HttpClient) {}
   // create a method to call api that is able to talk to our .net6api and read employees 
   getAllEmployees(): Observable <Employee[]>{
    return this.http.get<Employee[]>(this.baseApiUrl + '/api/employees');
  }
//calling api for adding employee
  addEmployee(addEmployeeRequest:any):Observable<Employee>{
    return this.http.post<Employee>(this.baseApiUrl +'/api/employees',addEmployeeRequest);

  }
  //calling api for checking existence of an employee
  getEmployee(id: string):Observable<Employee>{
    return this.http.get<Employee>(this.baseApiUrl+'/api/employees/'+id);
  }

  //calling the api to do the update

  updateEmployee(updateEmployeeRequest: any):Observable<Employee>{
    return this.http.post<Employee>(this.baseApiUrl +'/api/employees',updateEmployeeRequest);

  }
//Calling the api that deletes from the database.
deleteEmployee(id: string): Observable<Employee>{{
   return this.http.delete<Employee>(this.baseApiUrl + '/api/employees/' + id)
}}
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.models';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  editEmployeeDetailsForm: FormGroup ;
  employee:Employee
  employeeId:any;
  // employeeDetails: any;
  constructor(private route: ActivatedRoute, private employeesService: EmployeesService, private fb: FormBuilder, private router: Router) {
    this.route.params.subscribe(data=>{
      this.employeeId=data['id']
    })
   }

  ngOnInit(): void {
    this.getEmployeeById();
    this.editEmployeeDetailsForm = this.fb.group({
       id: '',
       firstName: '',
       email:'',
       phone:0,
       salary:0,
       department: '',

    })
  }
  getEmployeeById(){
    this.employeesService.getEmployee(this.employeeId).subscribe(data=>{
      this.employee=data;
      this.editEmployeeDetailsForm.patchValue(data)

    })
  }

  updateEmployee(){

    this.employeesService.updateEmployee(this.editEmployeeDetailsForm.value).subscribe({
      next: (response)=>{
        this.router.navigate(['employees'])
        alert ('successfully updated');
        this.employeesService.getAllEmployees();
      }
    })
  }

  deleteEmployee(id: string){
    this.employeesService.deleteEmployee(id).subscribe({
      next: (response)=>{
        alert('successfully deleted');
        this.router.navigate(['employees'])
        
      }
    })
  }
}

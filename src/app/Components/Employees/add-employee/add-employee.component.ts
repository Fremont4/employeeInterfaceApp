import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Employee } from 'src/app/models/employee.models';
import { EmployeesService } from 'src/app/services/employees.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {
  //binding our variable to our form
  createEmployeeForm: FormGroup ;

  constructor(private employeesService: EmployeesService, private fb: FormBuilder, private router: Router) { }

  ngOnInit(): void {
    this.createEmployeeForm = this.fb.group({
      firstName: '',
      email:'',
      phone:0,
      salary:0,
      department: '',
    })
   
  }
  addEmployee(){
    this.employeesService.addEmployee(this.createEmployeeForm.value).subscribe({
      next:  (res: any) => {
        
            alert('success')
            //upon success navigate back to employee list
            this.router.navigate(['/employees'])
          },
          error:(response)=>{
            alert('something went wrong');
          }
          
    }
)
  }

}

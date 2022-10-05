import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-registation',
  templateUrl: './registation.component.html',
  styleUrls: ['./registation.component.css']
})
export class RegistationComponent implements OnInit {
  //binding our variable to our form.
  createRegisterForm: FormGroup;

  constructor(private fb: FormBuilder, private registerService: RegisterService, private router: Router) { }

  ngOnInit(): void {
    this.createRegisterForm = this.fb.group({
      fullName: '',
      email:'',
      phone:0,
      department: '',
      password:0,
    });
  }

  addUser(){
    this.registerService.addUsers(this.createRegisterForm.value)
    .subscribe({
      next: (response: any)=>{
        this.router.navigate(['/login'])

        response(alert ('Registration successful'));
        // console.log(this.createRegisterForm.value)
      
      }
    })
  }


}

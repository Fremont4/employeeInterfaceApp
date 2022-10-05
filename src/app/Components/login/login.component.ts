import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AunthenticatedResponse } from 'src/app/models/AunthenticatedResponse.models';
import { Login } from 'src/app/models/login.models';
import { RegisterService } from 'src/app/services/register.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogin: boolean;
  //binding our variable to form
  createLoginForm: FormGroup;


  constructor(private fb: FormBuilder, private registerService: RegisterService, private route: ActivatedRoute, private router: Router, private http: HttpClient) { 

  }
  

  ngOnInit(): void {
    // this.getAllUsersById();
    this.createLoginForm=this.fb.group({
      email: new FormControl ('', [Validators.required]),
      password: new FormControl ('', [Validators.required]),

    })
  }

  addUser(){
    if (this.createLoginForm.valid) {
      this.registerService.loginUsers(this.createLoginForm.value)
      .subscribe({
        next: (response: AunthenticatedResponse)=>{

          const token = response.token
          localStorage.setItem("jwt",token)
          this.invalidLogin=false;
          this.router.navigate(['/dashboard'])

        
        },
        error: (err: HttpErrorResponse) => this.invalidLogin = true
      })
      
    }
    
    
    
  }

}

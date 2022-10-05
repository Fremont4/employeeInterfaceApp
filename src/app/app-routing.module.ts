import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { AddEmployeeComponent } from './Components/Employees/add-employee/add-employee.component';
import { EditEmployeeComponent } from './Components/Employees/edit-employee/edit-employee.component';
import { EmployeeListComponent } from './Components/Employees/employee-list/employee-list.component';
import { LoginComponent } from "./Components/login/login.component";

import { RegistationComponent } from "./Components/registation/add-user/registation.component";

const routes: Routes = [
  {
    path:'',
    component:LoginComponent  
  },
  {
    path:'employees',
    component:EmployeeListComponent
  },

  {
    path:'employees/add',
    component:AddEmployeeComponent
  }, 
   {
    path:'employees/edit/:id',
    component:EditEmployeeComponent
  },

  {
    path:'registration/add',
    component:RegistationComponent
  },


  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'dashboard',
    component:DashboardComponent
  },

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

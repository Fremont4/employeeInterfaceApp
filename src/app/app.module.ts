import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeListComponent } from './Components/Employees/employee-list/employee-list.component';
import { AddEmployeeComponent } from './Components/Employees/add-employee/add-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditEmployeeComponent } from './Components/Employees/edit-employee/edit-employee.component';
import { RegistationComponent } from "./Components/registation/add-user/registation.component";
import { LoginComponent } from "./Components/login/login.component";
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ProfileComponent } from './Components/profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    AddEmployeeComponent,
    EditEmployeeComponent,
    RegistationComponent,
    LoginComponent,
    DashboardComponent,
    ProfileComponent,

    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { ComponentsService } from './services/components.service';
import { UserService } from './services/user.service';
import { DesignationComponent } from './Component/designation/designation.component';
import { EmployeeComponent } from './Component/employee/employee.component';
import { ShowDesigComponent } from './Component/designation/show-desig/show-desig.component';
import { AddUpdateDesignComponent } from './Component/designation/add-update-design/add-update-design.component';
import { LeavesComponent } from './Component/leaves/leaves.component';
import { PaymentsComponent } from './Component/payments/payments.component';
import { WorkinghoursComponent } from './Component/workinghours/workinghours.component';
import { ShowEmpComponent } from './Component/employee/show-emp/show-emp.component';
import { AddUpdateEmpComponent } from './Component/employee/add-update-emp/add-update-emp.component';
import { ShowPaymentsComponent } from './Component/payments/show-payments/show-payments.component';
import { AddUpdatePaymentsComponent } from './Component/payments/add-update-payments/add-update-payments.component';
import { ShowWorkinghoursComponent } from './Component/workinghours/show-workinghours/show-workinghours.component';
import { AddUpdateWorkinghoursComponent } from './Component/workinghours/add-update-workinghours/add-update-workinghours.component';
import { AddUpdateLeavesComponent } from './Component/leaves/add-update-leaves/add-update-leaves.component';
import { ShowLeavesComponent } from './Component/leaves/show-leaves/show-leaves.component';
import { Login1Component } from './Component/login1/login1.component';
import { Registration1Component } from './Component/registration1/registration1.component';
import { HomeComponent } from './Component/home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    EmployeeComponent,
    DesignationComponent,
    ShowDesigComponent,
    AddUpdateDesignComponent,
    LeavesComponent,PaymentsComponent
    ,WorkinghoursComponent, ShowEmpComponent, AddUpdateEmpComponent,
     ShowPaymentsComponent, AddUpdatePaymentsComponent, 
     ShowWorkinghoursComponent, AddUpdateWorkinghoursComponent, AddUpdateLeavesComponent, ShowLeavesComponent, Login1Component, Registration1Component, HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService,ComponentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }

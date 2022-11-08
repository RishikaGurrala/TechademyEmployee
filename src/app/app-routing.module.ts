import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignationComponent } from './Component/designation/designation.component';
import { EmployeeComponent } from './Component/employee/employee.component';
import { LeavesComponent } from './Component/leaves/leaves.component';
import { LoginComponent } from './Component/login/login.component';
import { Login1Component } from './Component/login1/login1.component';
import { PaymentsComponent } from './Component/payments/payments.component';
import { RegisterComponent } from './Component/register/register.component';
import { Registration1Component } from './Component/registration1/registration1.component';
import { WorkinghoursComponent } from './Component/workinghours/workinghours.component';

const routes: Routes = [
  {path:'employee',component:EmployeeComponent},
  {path:'designation', component:DesignationComponent},
  {path:'register',component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'payment', component:PaymentsComponent},
  {path:'workinghours',component:WorkinghoursComponent},
  {path:'leaves',component:LeavesComponent},
  {path:'registration',component:Registration1Component},
  {path:'login1',component:Login1Component}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

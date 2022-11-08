import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DesignationComponent } from './Component/designation/designation.component';
import { EmployeeComponent } from './Component/employee/employee.component';
import { LoginComponent } from './Component/login/login.component';
import { PaymentsComponent } from './Component/payments/payments.component';
import { RegisterComponent } from './Component/register/register.component';

const routes: Routes = [
  {path:'employee',component:EmployeeComponent},
  {path:'designation', component:DesignationComponent},
  {path:'register',component:RegisterComponent},
  {path:'login', component:LoginComponent},
  {path:'payment', component:PaymentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

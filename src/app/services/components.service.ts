import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ComponentsService {
  baseApiUrl:string=environment.baseUrl;

  constructor(private http:HttpClient) { }
  getDesigList():Observable<any[]>{
    return this.http.get<any>(this.baseApiUrl+'/Designations/Read');
  }
  addDesig(val:any){
    return this.http.post(this.baseApiUrl+'/Designations/Post',val)
  }
  updateDesig(val1: any,val:any){
    return this.http.put(this.baseApiUrl+'/Designations/'+val1,val)
  }
  deleteDesig(val:any){
    return this.http.delete(this.baseApiUrl+'/Designations/'+val);
  }
  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.baseApiUrl+'/Employees/Read');
  }
  addEmployee(val:any){
    return this.http.post(this.baseApiUrl+'/Employees/Post',val)
  }
  updateEmployee(val1:any,val:any){
    return this.http.put(this.baseApiUrl+'/Employees/'+val1,val)
  }
  deleteEmployee(val:any){
    return this.http.delete(this.baseApiUrl+'/Employees/'+val);
  }
  getPaymentList():Observable<any[]>{
    return this.http.get<any>(this.baseApiUrl+'/Payments/Read');
  }
  addPayment(val:any){
    return this.http.post(this.baseApiUrl+'/Payments/Post',val)
  }
  updatePayment(val1:any,val:any){
    return this.http.put(this.baseApiUrl+'/Payments/'+val1,val)
  }
  deletePayment(val:any){
    return this.http.delete(this.baseApiUrl+'/Payments/'+val);
  }
  getWorkingHoursList():Observable<any[]>{
    return this.http.get<any>(this.baseApiUrl+'/WorkingHours/Read');
  }
  addWorkingHours(val:any){
    return this.http.post(this.baseApiUrl+'/WorkingHours/Post',val)
  }
  updateWorkingHours(val1:any,val:any){
    return this.http.put(this.baseApiUrl+'/WorkingHours/'+val1,val)
  }
  deleteWorkingHours(val:any){
    return this.http.delete(this.baseApiUrl+'/WorkingHours/'+val);
  }
  getLeavesList():Observable<any[]>{
    return this.http.get<any>(this.baseApiUrl+'/Leaves/Read');
  }
  addLeaveRequest(val:any){
    return this.http.post(this.baseApiUrl+'/Leaves/Post',val)
  }
  updateLeaveRequest(val1:any,val:any){
    return this.http.put(this.baseApiUrl+'/Leaves/'+val1,val)
  }
  deleteLeaveRequest(val:any){
    return this.http.delete(this.baseApiUrl+'/Leaves/'+val);
  }
}


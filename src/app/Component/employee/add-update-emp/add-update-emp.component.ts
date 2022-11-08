import { Component, Input, OnInit } from '@angular/core';
import { ComponentsService } from 'src/app/services/components.service';

@Component({
  selector: 'app-add-update-emp',
  templateUrl: './add-update-emp.component.html',
  styleUrls: ['./add-update-emp.component.css']
})
export class AddUpdateEmpComponent implements OnInit {
  @Input() emp:any;
  employeeId!:string;
  employeeName!:string;
  phoneNo!:string;
  emailId!:string;
  address!:string;
  createdDate!:string;
  designationName!:string;

  DesignationList:any=[];
  constructor(private service:ComponentsService) { }

  ngOnInit(): void {
  }
  // loadDepartmentList(){
  //   this.service.getAllDepartmentNames().subscribe((data:any)=>{
  //     this.DesignationList=data;

  //     this.EmployeeId=this.emp.EmployeeId;
  //     this.EmployeeName=this.emp.EmployeeName;
  //     this.PhoneNo=this.emp.PhoneNo;
  //     this.Email=this.emp.Email;
  //     this.Address=this.emp.Address;
  //     this.DateOfJoining=this.emp.DateOfJoining;
  //     this.DesignationName=this.emp.DesignationName;
  //   });
  // }

  addEmployee(){
    var val = {employeeId:this.employeeId,
                employeeName:this.employeeName,
                phoneNo:this.phoneNo,
                emailId:this.emailId,
                address:this.address,
              createdDate:this.createdDate,
            designationName:this.designationName};

    this.service.addEmployee(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateEmployee(){
    var val = {employeeId:this.employeeId,
      employeeName:this.employeeName,
      phoneNo:this.phoneNo,
                emailId:this.emailId,
                Address:this.address,
              createdDate:this.createdDate,
            designationName:this.designationName};

    this.service.updateEmployee(this.employeeId,val).subscribe(res=>{
    alert(res.toString());
    });
  }
  refreshDesigList(){
    this.service.getEmpList().subscribe(data=>{
      this.DesignationList=data;console.log(data)
    });
  }

}

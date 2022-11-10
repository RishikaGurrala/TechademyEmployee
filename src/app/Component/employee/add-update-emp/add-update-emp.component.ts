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
      if(res=="Employee Inserted Successfully"){
        alert("Employee Added succesfully");
        }else if(res=="There is no such Designation Exists"){
          alert("No such Designation Exists");
        }else if(res=="Employee Insertion Failed"){
          alert("Insertion Failed");
        }
        else{
          alert("Something went wrong");
        }
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

    this.service.updateEmployee(this.emp.employeeId,val).subscribe(res=>{
    if(res=="updation sussessfull"){
        alert("Updation Succesfull");
        }
        else if(res=="The designation is not in the list of designation choose other and try again"){
          alert("No such designation exists");
        }else if(res=="updation failed"){
          alert("Updation Failed");
        }
        else{
          alert("Something went wrong");
          
        }
    });
  }
  refreshDesigList(){
    this.service.getEmpList().subscribe(data=>{
      this.DesignationList=data;console.log(data)
    });
  }

}

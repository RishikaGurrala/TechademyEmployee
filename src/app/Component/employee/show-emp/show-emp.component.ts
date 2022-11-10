import { Component, OnInit } from '@angular/core';
import { ComponentsService } from 'src/app/services/components.service';

@Component({
  selector: 'app-show-emp',
  templateUrl: './show-emp.component.html',
  styleUrls: ['./show-emp.component.css']
})
export class ShowEmpComponent implements OnInit {
  EmployeeList:any=[];

  ModalTitle!:string;
  ActivateAddUpdateEmpComp:boolean=false;
  emp:any;
  constructor(private empl:ComponentsService) { }

  ngOnInit(): void {
    this.refreshEmpList();
  }
  addClick(){
    this.emp={
      employeeId:0,
      employeeName:"",
      phoneNo:"",
      emailId:"",
      address:"",
      createdDate:"",
      designationName:""
    }
    this.ModalTitle="Add Employee";
    this.ActivateAddUpdateEmpComp=true;

  }

  editClick(item:any){
    console.log(item);
    this.emp=item;
    this.ModalTitle="Edit Employee";
    this.ActivateAddUpdateEmpComp=true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.empl.deleteEmployee(item.employeeId).subscribe(data=>{
        if(data=="Employee deleted successfully"){
          alert("Employee Deleted");
          this.refreshEmpList();
          }
          else if(data=="Employee deletion failed"){
            alert("EmployeeDeletion failed");
            this.refreshEmpList();
          }
          else{
            alert("Something went wrong");
        this.refreshEmpList();
          }
      })
    }
  }

  closeClick(){
    this.ActivateAddUpdateEmpComp=false;
    this.refreshEmpList();
  }


  refreshEmpList(){
    this.empl.getEmpList().subscribe(data=>{
      this.EmployeeList=data;console.log(data)
    });
  }

}

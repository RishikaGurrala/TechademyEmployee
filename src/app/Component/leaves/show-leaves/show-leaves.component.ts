import { Component, OnInit } from '@angular/core';
import { ComponentsService } from 'src/app/services/components.service';

@Component({
  selector: 'app-show-leaves',
  templateUrl: './show-leaves.component.html',
  styleUrls: ['./show-leaves.component.css']
})
export class ShowLeavesComponent implements OnInit {
  LeaveList:any=[];

  ModalTitle!:string;
  ActivateAddUpdateLeaveComp:boolean=false;
  leaves:any;
  constructor(private service:ComponentsService) { }

  ngOnInit(): void {
    this.refreshLeaveList();
  }
  addClick(){
    this.leaves={
      Id:0,
      leaveType:"",
      startDate:"",
      endDate:"",
      employeeId:"",
      leaveReason:""
    }
    this.ModalTitle="Add LeaveRequest";
    this.ActivateAddUpdateLeaveComp=true;

  }

  editClick(item:any){
    console.log(item);
    this.leaves=item;
    this.ModalTitle="Edit LeaveRequest";
    this.ActivateAddUpdateLeaveComp=true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.deleteLeaveRequest(item.employeeId).subscribe(data=>{
        alert(data.toString());
        this.refreshLeaveList();
      })
    }
  }

  closeClick(){
    this.ActivateAddUpdateLeaveComp=false;
    this.refreshLeaveList();
  }


  refreshLeaveList(){
    this.service.getLeavesList().subscribe(data=>{
      this.LeaveList=data;console.log(data)
    });
  }
}

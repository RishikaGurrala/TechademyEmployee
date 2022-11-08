import { Component, Input, OnInit } from '@angular/core';
import { ComponentsService } from 'src/app/services/components.service';

@Component({
  selector: 'app-add-update-leaves',
  templateUrl: './add-update-leaves.component.html',
  styleUrls: ['./add-update-leaves.component.css']
})
export class AddUpdateLeavesComponent implements OnInit {
  @Input() leaves:any;
  id!:string;
  leaveType!:string;
  startDate!:string;
  endDate!:string;
  employeeId!:string;
  leaveReason!:string;
  LeaveList:any=[];
  constructor(private service:ComponentsService) { }

  ngOnInit(): void {
    this.refreshLeaveList();
  }
  addLeave(){
    var val = {id:this.id,
      leaveType:this.leaveType,
      startDate:this.startDate,
      endDate:this.endDate,
      employeeId:this.employeeId,
      leaveReason:this.leaveReason
      };

    this.service.addLeaveRequest(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateLeave(){
    var val = {id:this.id,
      leaveType:this.leaveType,
      startDate:this.startDate,
      endDate:this.endDate,
      employeeId:this.employeeId,
      leaveReason:this.leaveReason};

    this.service.updateLeaveRequest(this.employeeId,val).subscribe(res=>{
    alert(res.toString());
    });
  }
  refreshLeaveList(){
    this.service.getLeavesList().subscribe(data=>{
      this.LeaveList=data;console.log(data)
    });
  }

}

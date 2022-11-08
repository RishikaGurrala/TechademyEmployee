import { Component, Input, OnInit } from '@angular/core';
import { ComponentsService } from 'src/app/services/components.service';

@Component({
  selector: 'app-add-update-workinghours',
  templateUrl: './add-update-workinghours.component.html',
  styleUrls: ['./add-update-workinghours.component.css']
})
export class AddUpdateWorkinghoursComponent implements OnInit {

  constructor(private service:ComponentsService) { }
  @Input() hours:any;
  id!: string;
  companyWorkingHours!:string;
  employeeWorkingHours!: string;
  employeeId!:string;
  ngOnInit(): void {
  }
  addWorkinghours(){
    var val={
      id:this.id,
      companyWorkingHours:this.companyWorkingHours,
      employeeWorkingHours:this.employeeWorkingHours,
      employeeId:this.employeeId
   };
    this.service.addWorkingHours(val).subscribe(res=>{
      alert(res.toString());
    });
  }
  updateWorkinghours(){
    // designationName:this.designationName
    var val={id:this.id,
      companyWorkingHours:this.companyWorkingHours,
      employeeWorkingHours:this.employeeWorkingHours,
      employeeId:this.employeeId};
      this.service.updateWorkingHours(this.employeeId,val).subscribe(res=>{
        alert(res.toString());
      });
  }

}

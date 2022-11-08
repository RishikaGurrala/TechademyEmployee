import { Component, OnInit } from '@angular/core';
import { ComponentsService } from 'src/app/services/components.service';

@Component({
  selector: 'app-show-workinghours',
  templateUrl: './show-workinghours.component.html',
  styleUrls: ['./show-workinghours.component.css']
})
export class ShowWorkinghoursComponent implements OnInit {
  WorkinghoursList:any=[];

  ModalTitle!:string;
  ActivateAddUpdateWorkinghourComp:boolean=false;
  hours:any;
  constructor(private service:ComponentsService) { }

  ngOnInit(): void {
    this.refreshWorkinghoursList();
  }
  addClick(){
    this.hours={
      id:0,
      companyWorkingHours:"",
      employeeWorkingHours:"",
      employeeId:""
    }
    this.ModalTitle="Add WorkingHours";
    this.ActivateAddUpdateWorkinghourComp=true;

  }

  editClick(item:any){
    console.log(item);
    this.hours=item;
    this.ModalTitle="Edit WorkingHours";
    this.ActivateAddUpdateWorkinghourComp=true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.deleteWorkingHours(item.employeeId).subscribe(data=>{
        alert(data.toString());
        this.refreshWorkinghoursList();
      })
    }
  }

  closeClick(){
    this.ActivateAddUpdateWorkinghourComp=false;
    this.refreshWorkinghoursList();
  }


  refreshWorkinghoursList(){
    this.service.getWorkingHoursList().subscribe(data=>{
      this.WorkinghoursList=data;console.log(data)
    });
  }

}

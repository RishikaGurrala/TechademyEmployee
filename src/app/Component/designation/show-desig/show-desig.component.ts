import { Component, OnInit } from '@angular/core';
import { ComponentsService } from 'src/app/services/components.service';

@Component({
  selector: 'app-show-desig',
  templateUrl: './show-desig.component.html',
  styleUrls: ['./show-desig.component.css']
})
export class ShowDesigComponent implements OnInit {
  DesignationList:any=[];
  ModalTitle!:string;
  ActivateAddUpdateDesigComp:boolean=false;
  design:any;
  constructor(private desig:ComponentsService) { }

  ngOnInit(): void {
    this.refreshDesigList();
  }
    addClick(){
    this.design={
      id:0,
      designationName:"",
      role:"",
      department:"",
    }
    this.ModalTitle="Add Designation";
    this.ActivateAddUpdateDesigComp=true;

  }

  editClick(item:any){
    console.log(item);
    this.design=item;
    this.ModalTitle="Edit Designation";
    this.ActivateAddUpdateDesigComp=true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.desig.deleteDesig(item.designationName).subscribe(data=>{
        if(data=="Designation deleted successfully"){
        alert("Designation Deleted");
        this.refreshDesigList();
        }
        else if(data=="Designation deletion failed"){
          alert("Designation Deletion failed");
          this.refreshDesigList();
        }
        else{
          alert("Something went wrong");
        }
        
      })
    }
  }

  closeClick(){
    this.ActivateAddUpdateDesigComp=false;
    this.refreshDesigList();
  }


  refreshDesigList(){
    this.desig.getDesigList().subscribe(data=>{
      this.DesignationList=data;console.log(data)
    });
  }
}

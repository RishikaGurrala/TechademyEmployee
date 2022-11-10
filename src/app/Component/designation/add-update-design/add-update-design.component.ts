import { Component, Input, OnInit } from '@angular/core';
import { ComponentsService } from 'src/app/services/components.service';

@Component({
  selector: 'app-add-update-design',
  templateUrl: './add-update-design.component.html',
  styleUrls: ['./add-update-design.component.css']
})
export class AddUpdateDesignComponent implements OnInit {

  constructor(private desig:ComponentsService) { }
  @Input() dep:any;
  id!: string;
  designationName!: string;
  role!:string;
  departmentName!:string;
  ngOnInit(): void {
  }
  addDesig(){
    var val={
      id:this.id,
    designationName:this.designationName,
    role:this.role,
departmentName:this.departmentName  };
    this.desig.addDesig(val).subscribe(res=>{
      if(res=="Designation Inserted Successfully"){
      alert("Added succesfull");
      }
    });
  }
  UpdateDesig(){
    // designationName:this.designationName
    var val={id:this.id,
      designationName:this.designationName,
      Role:this.role,
  departmentName:this.departmentName};
      this.desig.updateDesig(this.designationName,val).subscribe(res=>{
        if(res=="Designation updation sussessfull"){
        alert("Updation Succesfull");
        }
        else if(res=="Designation updation failed"){
          alert("Updation Failed");
        }
        else{
          alert("Something went wrong");
        }
      });
  }

}

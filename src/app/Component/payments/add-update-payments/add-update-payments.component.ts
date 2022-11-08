import { Component, Input, OnInit } from '@angular/core';
import { ComponentsService } from 'src/app/services/components.service';

@Component({
  selector: 'app-add-update-payments',
  templateUrl: './add-update-payments.component.html',
  styleUrls: ['./add-update-payments.component.css']
})
export class AddUpdatePaymentsComponent implements OnInit {

  constructor(private service:ComponentsService) { }
  @Input() payment:any;
  id!: string;
  paymentRule!:string;
  designationName!: string;
  ngOnInit(): void {
  }
  addPayment(){
    var val={
      id:this.id,
      paymentRule:this.paymentRule,
    designationName:this.designationName
   };
    this.service.addPayment(val).subscribe(res=>{
      alert(res.toString());
    });
  }
  updatePayment(){
    // designationName:this.designationName
    var val={id:this.id,
      paymentRule:this.paymentRule,
      designationName:this.designationName};
      this.service.updatePayment(this.designationName,val).subscribe(res=>{
        alert(res.toString());
      });
  }
}

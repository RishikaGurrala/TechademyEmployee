import { Component, Input, OnInit } from '@angular/core';
import { ComponentsService } from 'src/app/services/components.service';

@Component({
  selector: 'app-show-payments',
  templateUrl: './show-payments.component.html',
  styleUrls: ['./show-payments.component.css']
})
export class ShowPaymentsComponent implements OnInit {
  PaymentList:any=[];

  ModalTitle!:string;
  ActivateAddUpdatePaymentComp:boolean=false;
  payment:any;
  constructor(private service:ComponentsService) { }

  ngOnInit(): void {
    this.refreshPaymentList()
  }
  addClick(){
    this.payment={
      id:0,
      paymentRule:"",
      designationName:""
    }
    this.ModalTitle="Add Payment Rule";
    this.ActivateAddUpdatePaymentComp=true;

  }

  editClick(item:any){
    console.log(item);
    this.payment=item;
    this.ModalTitle="Edit PaymentRue";
    this.ActivateAddUpdatePaymentComp=true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.deletePayment(item.designationName).subscribe(data=>{
        alert(data.toString());
        this.refreshPaymentList();
      })
    }
  }

  closeClick(){
    this.ActivateAddUpdatePaymentComp=false;
    this.refreshPaymentList();
  }


  refreshPaymentList(){
    this.service.getPaymentList().subscribe(data=>{
      this.PaymentList=data;console.log(data)
    });
  }

}

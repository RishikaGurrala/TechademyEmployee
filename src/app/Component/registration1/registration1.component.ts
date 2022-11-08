import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-registration1',
  templateUrl: './registration1.component.html',
  styleUrls: ['./registration1.component.css']
})
export class Registration1Component implements OnInit {
  repeatpass:string='name';
  constructor(private http:HttpClient,private service:UserService) { }
isAccountCreated:boolean=false;
displayMsg:string='';
  ngOnInit(): void {
  }
  registerForm=new FormGroup({
    name:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    userName:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    mobile:new FormControl("",[Validators.required,Validators.pattern("[0-9]*"),Validators.minLength(10),Validators.maxLength(10),]),
    email:new FormControl("",[Validators.required,Validators.email]),
    address:new FormControl("",[Validators.required]),
    gender:new FormControl("",[Validators.required]),
    pwd:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(15),]),
    rpwd:new FormControl(""),
  });
  get name():FormControl{
    return this.registerForm.get("name") as FormControl;
  }
  get userName():FormControl{
    return this.registerForm.get("userName") as FormControl;
  }
  get mobile():FormControl{
    return this.registerForm.get("mobile") as FormControl;
  }
  get email():FormControl{
    return this.registerForm.get("email") as FormControl;
  }
  get address():FormControl{
    return this.registerForm.get("address") as FormControl;
  }
  
  get gender():FormControl{
    return this.registerForm.get("gender") as FormControl;
  }
  get Pwd():FormControl{
    return this.registerForm.get("pwd") as FormControl;
  }
  get Rpwd():FormControl{
    return this.registerForm.get("rpwd") as FormControl;
  }
  registerSubmitted(){
    console.log(this.registerForm.valid);
   this.repeatpass='none'
   this.service.registerUser1([
    this.registerForm.value.name!,
    this.registerForm.value.userName!,
    this.registerForm.value.mobile!,
    this.registerForm.value.email!,
    this.registerForm.value.address!,
    this.registerForm.value.gender!,
    this.registerForm.value.pwd!,
   ]).subscribe(res=>
    {
      if(res=="registered successfully"){
        this.displayMsg="Account created Sucessfully";
        this.isAccountCreated=true;
      }
      else if(res=="UserName already exist try another one"){
       this.displayMsg="Username already exist create new one";
       this.isAccountCreated=false;
      }
      else if(res=="registration failed"){
        this.displayMsg="Account creation Failed";
        this.isAccountCreated=false;
      }
      else{
        this.displayMsg="Something went wrong";
        this.isAccountCreated=false;
      }
    })
  }

}

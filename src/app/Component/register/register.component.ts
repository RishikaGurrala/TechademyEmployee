import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {last} from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  repeatpass:string='name';
  constructor(private http:HttpClient,private register:UserService) { }

  ngOnInit(): void {
  }
  isAcccountCreated:boolean=false;
  displayMsg:string='';
  registerForm=new FormGroup({
    firstname:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    lastname:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    email:new FormControl("",[Validators.required,Validators.email]),
    mobile:new FormControl("",[Validators.required,Validators.pattern("[0-9]*"),Validators.minLength(10),Validators.maxLength(10),]),
    gender:new FormControl("",[Validators.required]),
    pwd:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(15),]),
    rpwd:new FormControl(""),
    
    
    }
    );
    
    registerSubmitted(){
      console.log(this.registerForm.valid);
     this.repeatpass='none'
     this.register.registerUser([
      this.registerForm.value.firstname!,
      this.registerForm.value.lastname!,
      this.registerForm.value.mobile!,
      this.registerForm.value.email!,
      this.registerForm.value.gender!,
      
      this.registerForm.value.pwd!,
     ]).subscribe(res=>
      {
        if(res=="registered successfully"){
          this.displayMsg="Account created Sucessfully";
          this.isAcccountCreated=true;
        }
        else if(res=="Username already exist try another one"){
         this.displayMsg="Username already exist create new one";
         this.isAcccountCreated=false;
        }
        else if(res=="registration failed"){
          this.displayMsg="Account creation Failed";
          this.isAcccountCreated=false;
        }
        else{
          this.displayMsg="Something went wrong";
          this.isAcccountCreated=false;
        }
      })
    }
    get FirstName():FormControl{
      return this.registerForm.get("firstname") as FormControl;
    }
    get LastName():FormControl{
      return this.registerForm.get("lastname") as FormControl;
    }
    get Email():FormControl{
      return this.registerForm.get("email") as FormControl;
    }
    get Mobile():FormControl{
      return this.registerForm.get("mobile") as FormControl;
    }
    get Gender():FormControl{
      return this.registerForm.get("gender") as FormControl;
    }
    get Pwd():FormControl{
      return this.registerForm.get("pwd") as FormControl;
    }
    get Rpwd():FormControl{
      return this.registerForm.get("rpwd") as FormControl;
    }

}

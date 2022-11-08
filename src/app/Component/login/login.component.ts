import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private login:UserService) { }

  ngOnInit(): void {
  }
  loginForm=new FormGroup({
    email:new FormControl("",[Validators.required,Validators.email]),
    pwd:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(15),]),

  });
  isUserValid:boolean=false;
  get Email():FormControl{
    return this.loginForm.get("email") as FormControl;
  }
  get Pwd():FormControl{
    return this.loginForm.get("pwd") as FormControl;
  }
  loginSubmitted(){
    this.login.loginUser([this.loginForm.value.email!,
      this.loginForm.value.pwd!]).subscribe(res=>{
        if(res=="Login Failed"){
          this.isUserValid=false;
          alert("Login Unsuccessfull");
        }else if(res=="Login Successfull"){
          this.isUserValid=true;
          alert("Login successfull");
        }
        else{
          this.isUserValid=false;
          alert("Something went wrong");
        }
      });
  }

}

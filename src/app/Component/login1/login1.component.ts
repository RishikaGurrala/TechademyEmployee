import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login1',
  templateUrl: './login1.component.html',
  styleUrls: ['./login1.component.css']
})
export class Login1Component implements OnInit {
  isUserValid:boolean=false;
  constructor(private service:UserService, private router:Router) { }

  ngOnInit(): void {
  }
  loginForm=new FormGroup({
    userName:new FormControl("",[Validators.required,Validators.minLength(2),Validators.pattern("[a-zA-Z].*")]),
    pwd:new FormControl("",[Validators.required,Validators.minLength(6),Validators.maxLength(15),])

  });
  get userName():FormControl{
    return this.loginForm.get("userName") as FormControl;
  }
  get Pwd():FormControl{
    return this.loginForm.get("pwd") as FormControl;
  }
  loginSubmitted(){
    this.service.loginUser1([this.loginForm.value?.userName!,
      this.loginForm.value.pwd!]).subscribe(res=>{
        if(res=="Login Failed"){
          this.isUserValid=false;
          alert("Login unsuccessfull");;
          
        }else {
          
          this.isUserValid=true;
          this.service.setToken(res);
          this.router.navigateByUrl('home');
        }
        
      });
  }

}

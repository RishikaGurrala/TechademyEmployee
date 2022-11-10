import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  baseApiUrl:string=environment.baseUrl;
  currentUser:BehaviorSubject<any>=new BehaviorSubject(null);
  jwtHelperService=new JwtHelperService();
  setToken(token:string){
    localStorage.setItem("access_token",token);
    this.loadCurrentUser();
  } 
  registerUser1(user1:Array<String>){
    // const headers={
    //   'access-Control-Allow-Headers':'Accept',
    //   'access-control-allow-origin':'*/*',
    //   'content-type':'application/json;charset=utf-8',
    //       };
          return this.http.post(this.baseApiUrl+'/Users1/SignUp',
          {
            name:user1[0],
            userName:user1[1],
            mobile:user1[2],
            email:user1[3],
            address:user1[4],
            gender:user1[5],
            password:user1[6]
          },{
            responseType:"text",
            //headers
          });
  }
  registerUser(user:Array<String>){
    //const httpsOptions={header:new HttpHeaders({'Content-Type':'application/json'})}
    const headers={
'access-Control-Allow-Headers':'Accept',
'access-control-allow-origin':'*/*',
'content-type':'application/json;charset=utf-8',
    };
    return this.http.post(
      this.baseApiUrl+'/Users/SignUp',
      {
        firstName:user[0],
        lastName:user[1],
        mobile:user[2],
        email:user[3],
        gender:user[4],
        password:user[5]
      },{
        headers
        //responseType:"text",
      }
    );
  }
  loginUser(loginInfo: Array<String>){
    return this.http.post(this.baseApiUrl+'/Users/SignIn',
    {
      email:loginInfo[0],
      password:loginInfo[1]
    },
    {
      responseType:"text",
    }
    );
  }
  loginUser1(loginInfo:Array<String>){
    // const headers={
    //   'access-Control-Allow-Headers':'Accept',
    //   'access-control-allow-origin':'*/*',
    //   'content-type':'application/json;charset=utf-8',
    //       };
    return this.http.post(this.baseApiUrl+'/Users1/SignIn',{
      userName:loginInfo[0],
      password:loginInfo[1]
    },
    {
      responseType:"text"//  headers
    }
    );
  }
  loadCurrentUser(){
    const token=localStorage.getItem("access_token");
    const userInfo=token != null? this.jwtHelperService.decodeToken(token): null;
    // const data=userInfo? {
    //   id:userInfo.id,
    //   name:userInfo.name,
    //   userName:userInfo.username,
    //   mobile:userInfo.mobile,
    //   email:userInfo.email,
    //   address:userInfo.address,
    //   gender:userInfo.gender,
    // }:null;
    // this.currentUser.next(data);
    console.log(userInfo);
  }
  removeToken(){
     localStorage.removeItem("access_token");
  }
  isLoggedin():boolean{
    return localStorage.getItem("access_token")?true:false;

  }
 
}

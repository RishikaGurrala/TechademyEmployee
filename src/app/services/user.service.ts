import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  baseApiUrl:string=environment.baseUrl;
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
        FirstName:user[0],
        LastName:user[1],
        Mobile:user[2],
        Email:user[3],
        Gender:user[4],
        Password:user[5]
      },{
        headers
        //responseType:"text",
      }
    );
  }
  loginUser(loginInfo: Array<String>){
    return this.http.post(this.baseApiUrl+'/Users/SignIn',
    {
      Email:loginInfo[0],
      Password:loginInfo[1]
    },
    {
      responseType:"text",
    }
    );
  }
}

import { Injectable } from '@angular/core';
import { User } from './user';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private apiService:ApiService) { 
    //this might be used to add users list from db json file ...#to check
    
   /* this.apiService.listUsers().subscribe(
      data => {this.validUsers = data ;}
         ); */

  }
ngOnInit():void {
      this.apiService.listUsers().subscribe(
data => {this.validUsers = data ;
alert("login serv"+this.validUsers)}
   );
  } 
  
validUsers:Observable<any> ;

checkUserLogin(username:string ,password:string,usr :User[]) :boolean
  {
    
      
      for(let i = 0; i<usr.length;i++)
     {
       
        if(username == usr[i].userName && password == usr[i].password)
        {   
          return true;
          
        }
     } 
     
   
   
return false;
  }


  getSessionUser()
  {
    return sessionStorage.getItem("userName");
  }
}

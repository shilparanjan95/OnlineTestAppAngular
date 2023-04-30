import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { LoginService } from '../login.service';
import { User } from '../user';
import {Router} from '@angular/router';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private builder :FormBuilder,private loginService:LoginService,private router:Router,private apiService :ApiService) {
    sessionStorage.clear();
   }
   users:Observable<any>;
  validUsers :User[];
  ngOnInit(): void {
   
    this.apiService.listUsers().subscribe(
      data =>
      { 
        this.validUsers = data;
      }
    )
    
    
  }
  
  loginForm = this.builder.group(
     {
      userName : this.builder.control('',Validators.required),
      password : this.builder.control('',Validators.required)
     }
  );
  msg="";
  data:any;
  loginUser()
  {
   
    if(this.loginForm.valid)
    {
      this.data = this.loginForm.value;

     
       if(this.loginService.checkUserLogin(this.data.userName,this.data.password,this.validUsers)==true)
      {  
        sessionStorage.setItem('userName', this.data.userName);
        if(this.data.userName=="admin" )
        {  
         this.router.navigate(['admin']);
        }
        else
         {console.log("inside login componet for user");
        
        this.router.navigate(['quiz']);
      }
      }
      else{
        this.msg ="Provide Valid Details to Login!";
        alert("Provide Valid Details to Login!");
        console.log("result "+this.loginService.checkUserLogin(this.data.userName,this.data.password,this.validUsers));
      }
      

    }
  }
}

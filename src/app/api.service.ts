import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Result } from './result';
import { User } from './user';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient :HttpClient) { }
   data:Observable<any>;
  userUrl ="http://localhost:3000/User";
  qUrl ="http://localhost:3000/";
  resultUrl ="http://localhost:3000/Result";

  htmlScore = -1;
  resultId = 1;
  saveUser(form:any)
  {
     this.httpClient.post(this.userUrl,form).subscribe(data =>{
      console.log("user saved");
     })
     ;
  }
  saveQuestion(form:any)
  {
       if(form.type == 'HTML' )
      { this.httpClient.post(this.qUrl+"HTML",form).subscribe(data =>{
       console.log("html q saved saved");
       })
      }
      else if(form.type == 'SQL' )
      { this.httpClient.post(this.qUrl+"SQL",form).subscribe(data =>{
       console.log("SQL q saved saved");
       })
      }
      else if(form.type == 'Java' )
      { this.httpClient.post(this.qUrl+"Java",form).subscribe(data =>{
       console.log("Java q saved saved");
       })
      };
      //add logic for other type of questions here 
  }

  listUsers() :Observable<any>
  {
    return  this.httpClient.get(this.userUrl);
     
  }
  getResult() :Observable<any>
  {
    return  this.httpClient.get(this.resultUrl);
  }

  htmlQ() :Observable<any>
  {
    //alert("service "+this.qUrl+"HTML");
   // alert("data "+JSON.stringify(this.data));
    return this.httpClient.get(this.qUrl+"HTML");
     
  }

  
  javaQ() :Observable<any>
  {
    
    return this.httpClient.get(this.qUrl+"Java");
     
  }
  sqlQ() :Observable<any>
  {
    
    return this.httpClient.get(this.qUrl+"SQL");
     
  }
  saveQuiz(form:Result)
  {   
     this.httpClient.post(this.resultUrl,form).subscribe(data =>{
      console.log("result saved");
     });
    
      
  }

  getUserName()
  {
   return  sessionStorage.getItem("userName");
    
  }
}

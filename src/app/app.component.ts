import { Component,DoCheck } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
 
  constructor(private router:Router)
  {

  }
  title = 'onlineTestApp';

  isAdminNav:boolean = false;
  isUserNav:boolean = false;
  isOuterNav:boolean =true;
  backg:boolean =false;

  ngDoCheck(): void {
    
   // alert(this.router.url);
   if( this.router.url=="/")
   {
    this.isOuterNav = true;
    this.backg= true;
   }
   else if( this.router.url=="/" || this.router.url=="/login"  || this.router.url=="/register" || this.router.url=="/contactUs")
    {
      this.isOuterNav = true;
      this.backg= false;
      this.isAdminNav= false;
      this.isUserNav  = false;
    }
    else if(this.router.url=="/addQuestion" || this.router.url=="/admin" )
    {
      
      this.isAdminNav= true;
      this.isOuterNav = false;
      this.isUserNav  = false;
      this.backg= false;
    }
    else  if(this.router.url=="/quiz" || this.router.url=="/admin" ){
      this.isUserNav  = true;
      this.isOuterNav = false;
      this.isAdminNav= false;
      this.backg= false;
    }

    
  }
 

}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})

export class LoginGuard implements CanActivate {
  currentUrl:string;
  constructor(private router :Router,private loginService :LoginService)
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.currentUrl  = route.url[0].path;
    //alert("url "+this.currentUrl);
      if(this.currentUrl.length==0 ||this.currentUrl=="register" || this.currentUrl=="login" || this.currentUrl=="contactUs" )
      {
        return true;
      }
     else  if(this.loginService.getSessionUser()=='admin')
      {

         if(this.currentUrl=="admin" || this.currentUrl=="addQuestion" || this.currentUrl=="registeredUser" || this.currentUrl=="result"  ) 
         {
            return true;
         }
      else return false;
      }
      else  if(this.loginService.getSessionUser()!=null)
      {

         if(this.currentUrl=="quiz" || this.currentUrl=="html" || this.currentUrl=="Java" || this.currentUrl=="SQL"  ) 
         {
            return true;
         }
      else  return false;
      }
      else {
        console.log("gaurad else ");
         alert("Login First to Proceed!");
        this.router.navigate(['login']);
        return false;
      }

    return false;

  }
  
}

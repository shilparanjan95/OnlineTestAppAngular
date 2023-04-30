import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { FormBuilder,Validators} from '@angular/forms';
import {Router} from '@angular/router'
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private builder : FormBuilder, private apiService:ApiService,
    private router :Router) { }

  ngOnInit(): void {
  }

  regForm =   this.builder.group({
    id: this.builder.control('',Validators.required),
    email : this.builder.control('',Validators.email),
    userName : this.builder.control('',Validators.required),
    password : this.builder.control('',Validators.required)
  });
  user:any;
  registerUser()
  {
     
    //if form is valid then only enter here ow disabled : form validations to add

   this.apiService.saveUser(this.regForm.value);
   alert("User registered With Name "+this.regForm.value.userName);
   //navigate to login page
    this.router.navigate(['login']);

  }
}

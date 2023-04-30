import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import { User } from '../user';
@Component({
  selector: 'app-registered-user',
  templateUrl: './registered-user.component.html',
  styleUrls: ['./registered-user.component.css']
})
export class RegisteredUserComponent implements OnInit {

  constructor(private apiService:ApiService) { }
users:Observable<any>;
  ngOnInit(): void {
  this.loadAllUser();

  console.log(this.users);
  }

  loadAllUser()
  {
       this.apiService.listUsers().subscribe(data=>
        {
          this.users = data;
          console.log( this.users);
        });
  }
}

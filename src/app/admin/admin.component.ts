import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private service :ApiService) { }

  ngOnInit(): void {
    this.userName = this.service.getUserName();
    this.day = new Date();

  }

  userName="default";
  day :Date;
  
}

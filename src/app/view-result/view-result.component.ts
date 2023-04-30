import { Component, OnInit } from '@angular/core';
import { Result } from '../result';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-view-result',
  templateUrl: './view-result.component.html',
  styleUrls: ['./view-result.component.css']
})
export class ViewResultComponent implements OnInit {

  constructor(private service:ApiService) { }
  resultStatus:string;
  resultList :Observable<any>;
  ngOnInit(): void {
    this.loadResult();
  }
  loadResult()
  {
   this.service.getResult().subscribe(
    data =>
    {
      this.resultList = data;
    }
   );
  }
}

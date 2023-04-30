import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Result } from '../result';
@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {

  constructor(private service :ApiService) { }
  userName:string;
  day:Date;
  htmlScore = "Not Attempted";
  javaScore = "Not Attempted";
  sqlScore =  "Not Attempted";
  score:number;
  finalStatus="NA";
  user:string;
  questions = 0;
  ngOnInit(): void {
    this.userName = this.service.getUserName();
    this.day = new Date();
    this.htmlScore= sessionStorage.getItem("html") ;
   this.user =  sessionStorage.getItem("userName");
   this.javaScore = sessionStorage.getItem("java");
   this.sqlScore = sessionStorage.getItem("sql");
   
   
  }

  saveQuiz()
  {    this.score = parseInt(this.htmlScore)+parseInt(this.javaScore)+parseInt(this.sqlScore) ;
      if(this.score>=11)
      { 
        this.finalStatus ="PASS";

      }
      else
      { this.finalStatus ="FAIL";

      }
      this.service.saveQuiz(new Result(""+this.score,this.finalStatus,this.user));
  }
}

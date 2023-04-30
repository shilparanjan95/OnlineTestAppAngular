import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../api.service';
import {FormBuilder,Validators} from '@angular/forms';
import { Question } from '../question';
import { Result } from '../result';
import {Router} from '@angular/router';
@Component({
  selector: 'app-html',
  templateUrl: './html.component.html',
  styleUrls: ['./html.component.css']
})
export class HtmlComponent implements OnInit {

  constructor(private service:ApiService,private builder:FormBuilder,
    private router:Router) { }
  questions : Question[];
  nextLength :number;
  ngOnInit(): void {
    this.loadQuestion();

    setTimeout(() => {
      this.htmlForm.controls.selectedAnswer.setValue('Select Answer');
    }, 0);
  }
  
  htmlForm = this.builder.group(
    { 
      id : this.builder.control('',Validators.required),
      question : this.builder.control('',Validators.required),
      type : this.builder.control('',Validators.required),
      answer : this.builder.control('',Validators.required),
      selectedAnswer : this.builder.control('',Validators.required),
      isHidden : this.builder.control(false)
    }
  );
htmlScore:number = 0;
flag = true;
step = 1;

  //form
  loadQuestion()
  {
  this.service.htmlQ().subscribe(data =>
    {
      this.questions = data;
      this.nextLength = this.questions.length
    });

    
  }
  
  selectedValue:string;
  result:Result;
  finalResult:string;
 
   next(data2:string)
   { 
   
    if(this.selectedValue == data2)
    {
      this.htmlScore = this.htmlScore+1;
      this.service.htmlScore = this.htmlScore;
      
    }
    this.step = this.step+1;
     sessionStorage.setItem("html",""+this.htmlScore);

    
      //this.result = new Result("HTML",this.htmlScore,this.finalResult,sessionStorage.getItem)
    }
   
   
   quiz()
  {  
    this.router.navigate(['quiz']);

  }


}

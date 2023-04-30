import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Question } from '../question';
import { Result } from '../result';

@Component({
  selector: 'app-sql',
  templateUrl: './sql.component.html',
  styleUrls: ['./sql.component.css']
})
export class SQLComponent implements OnInit {

  constructor(private service:ApiService,private builder:FormBuilder,
    private router:Router) { }
  questions : Question[];
  ngOnInit(): void {
    //alert("inint ");
    this.loadQuestion();

    setTimeout(() => {
      this.sqlForm.controls.selectedAnswer.setValue('Select Answer');
    }, 0);
  }
  
  sqlForm = this.builder.group(
    { 
      id : this.builder.control('',Validators.required),
      question : this.builder.control('',Validators.required),
      type : this.builder.control('',Validators.required),
      answer : this.builder.control('',Validators.required),
      selectedAnswer : this.builder.control('',Validators.required),
      isHidden : this.builder.control(false)
    }
  );
sqlScore:number = 0;
flag = true;
step = 1;

  //form
  loadQuestion()
  {
  this.service.sqlQ().subscribe(data =>
    {
      this.questions = data;
    });

    
  }
  
  selectedValue:string;
  result:Result;
  finalResult:string;
  next(data2:string)
   { 
   
    if(this.selectedValue == data2)
    {
      this.sqlScore = this.sqlScore+1;
     
      
    }
    this.step = this.step+1;
     sessionStorage.setItem("sql",""+this.sqlScore);
    }
   quiz()
  { 
    this.router.navigate(['quiz']);
  }

}


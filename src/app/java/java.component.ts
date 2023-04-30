import { Component, OnInit } from '@angular/core';
import { Question } from '../question';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { Result } from '../result';

@Component({
  selector: 'app-java',
  templateUrl: './java.component.html',
  styleUrls: ['./java.component.css']
})
export class JavaComponent implements OnInit {

  constructor(private service:ApiService,private builder:FormBuilder,
    private router:Router) { }
  questions : Question[];
  ngOnInit(): void {
    this.loadQuestion();

    setTimeout(() => {
      this.javaForm.controls.selectedAnswer.setValue('Select Answer');
    }, 0);
  }
  
  javaForm = this.builder.group(
    { 
      id : this.builder.control('',Validators.required),
      question : this.builder.control('',Validators.required),
      type : this.builder.control('',Validators.required),
      answer : this.builder.control('',Validators.required),
      selectedAnswer : this.builder.control('',Validators.required),
      isHidden : this.builder.control(false)
    }
  );
javaScore:number = 0;
flag = true;
step = 1;

  //form
  loadQuestion()
  {
  this.service.javaQ().subscribe(data =>
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
      this.javaScore = this.javaScore+1;
     
      
    }
    this.step = this.step+1;
     sessionStorage.setItem("java",""+this.javaScore);
 //this.result = new Result("HTML",this.htmlScore,this.finalResult,sessionStorage.getItem)
    }
   quiz()
  { 
    this.router.navigate(['quiz']);
  }

}


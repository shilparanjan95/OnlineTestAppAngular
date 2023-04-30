import { Component, OnInit } from '@angular/core';
import {FormBuilder,Validators } from '@angular/forms';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-add-questions',
  templateUrl: './add-questions.component.html',
  styleUrls: ['./add-questions.component.css']
})
export class AddQuestionsComponent implements OnInit {

  constructor(private builder:FormBuilder,private service:ApiService) { }

  ngOnInit(): void {
  }

  questionForm = this.builder.group(
    { 
      id : this.builder.control('',Validators.required),
      question : this.builder.control('',Validators.required),
      option1 : this.builder.control('',Validators.required),
      option2 : this.builder.control('',Validators.required),
      option3 : this.builder.control('',Validators.required),
      answer : this.builder.control('',Validators.required),
      type: this.builder.control('',Validators.required)
    }
  );
  
  addQuestion()
  {
   alert("Question added successfully , pls add another question .");
    this.service.saveQuestion(this.questionForm.value);
    //to reset form after submit
    
      this.reset();

  }
  reset()
  {
    this.questionForm.reset();

  }

}

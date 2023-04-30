import { Component, OnInit } from '@angular/core';
import {FormBuilder ,Validators} from '@angular/forms';
@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {

  constructor(private builder : FormBuilder) { }

  ngOnInit(): void {
  }

  contactForm =   this.builder.group({
    userName: this.builder.control('',Validators.required),
    email : this.builder.control('',Validators.email),
    comment : this.builder.control('',Validators.required),
  });

  contact()
  {
    alert("Hey!  "+this.contactForm.value.userName +" your message  was sent! ");
    this.contactForm.reset();
  }
}

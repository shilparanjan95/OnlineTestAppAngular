import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule} from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { AddQuestionsComponent } from './add-questions/add-questions.component'
import { HttpClientModule } from '@angular/common/http';
import { RegisteredUserComponent } from './registered-user/registered-user.component';
import { QuizComponent } from './quiz/quiz.component';
import { HtmlComponent } from './html/html.component';
import { ViewResultComponent } from './view-result/view-result.component';
import { SQLComponent } from './sql/sql.component';
import { JavaComponent } from './java/java.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ContactUsComponent,
    AdminComponent,
    AddQuestionsComponent,
    RegisteredUserComponent,
    QuizComponent,
    HtmlComponent,
    ViewResultComponent,
    SQLComponent,
    JavaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

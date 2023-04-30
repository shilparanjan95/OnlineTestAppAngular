import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddQuestionsComponent } from './add-questions/add-questions.component';
import { AdminComponent } from './admin/admin.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HtmlComponent } from './html/html.component';
import { LoginComponent } from './login/login.component';
import { QuizComponent } from './quiz/quiz.component';
import { RegisterComponent } from './register/register.component';
import { RegisteredUserComponent } from './registered-user/registered-user.component';
import { ViewResultComponent } from './view-result/view-result.component';
import { SQLComponent } from './sql/sql.component';
import { JavaComponent } from './java/java.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  
    { path:"login", component:LoginComponent},
    { path:"register", component:RegisterComponent},
    { path:"contactUs", component:ContactUsComponent},
    {path:"addQuestion",component:AddQuestionsComponent,canActivate:[LoginGuard]},
    {path:"admin",component:AdminComponent,canActivate:[LoginGuard]},
    {path :"registeredUser",component:RegisteredUserComponent,canActivate:[LoginGuard]},
    {path:"quiz",component:QuizComponent,canActivate:[LoginGuard]},
    {path:"html",component:HtmlComponent,canActivate:[LoginGuard]},
    {path:"Java",component:JavaComponent,canActivate:[LoginGuard]},
    {path:"SQL",component:SQLComponent,canActivate:[LoginGuard]},
    {path:"result",component:ViewResultComponent,canActivate:[LoginGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

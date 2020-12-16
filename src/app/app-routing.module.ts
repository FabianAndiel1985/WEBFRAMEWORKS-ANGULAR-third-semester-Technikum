import { DisplayUsersComponent } from './display-users/display-users.component';
import { LandingComponent } from './landing/landing.component';
import { EnterFormComponent } from './add-user/enter-form/enter-form.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path:"", component:LandingComponent},
  {path:'signUpUsers', component:EnterFormComponent},
  {path:'displayUsers', component:DisplayUsersComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

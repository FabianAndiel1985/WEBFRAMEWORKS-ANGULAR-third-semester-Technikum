import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EnterFormComponent } from './add-user/enter-form/enter-form.component';
import { LandingComponent } from './landing/landing.component';
import { DisplayUsersComponent } from './display-users/display-users.component';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import {SelectButtonModule} from 'primeng/selectbutton';
import {HttpClientModule} from '@angular/common/http';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { UpdateUserComponent } from './update-user/update-user.component';




@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    AddUserComponent,
    EnterFormComponent,
    LandingComponent,
    DisplayUsersComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    MenubarModule,
    SelectButtonModule,
    HttpClientModule,
    ButtonModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

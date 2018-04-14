import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {LoginService} from './login.service';
import { FormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component'
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }

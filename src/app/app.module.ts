import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module'

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {LoginService} from './login.service';
import { FormsModule} from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProjectComponent } from './project/project.component';
import { HeaderComponent } from './header/header.component';
import { BaseService} from './base.service';
import { HttpClientModule } from '@angular/common/http';
import { UserComponent } from './user/user.component';
import { TaskComponent } from './task/task.component';
import { FusionChartsModule } from 'angular2-fusioncharts';

// Import FusionCharts library and chart modules
import * as FusionCharts from 'fusioncharts';
import * as Charts from 'fusioncharts/fusioncharts.charts';
import * as FintTheme from 'fusioncharts/themes/fusioncharts.theme.fint';

// Pass the fusioncharts library and chart modules
FusionChartsModule.fcRoot(FusionCharts, Charts, FintTheme);


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    ProjectComponent,
    HeaderComponent,
    UserComponent,
    TaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    FusionChartsModule
  ],
  providers: [LoginService,BaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }

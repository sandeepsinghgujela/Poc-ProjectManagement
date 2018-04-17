import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import {ProjectComponent} from './project/project.component'
import {UserComponent} from './user/user.component'
import {TaskComponent} from './task/task.component'




// const routes: Routes = [
//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
  
// ];

const routes:Routes=[
{path:'login',component:LoginComponent},
{path:'dashboard',component:DashboardComponent},
{path:'project',component:ProjectComponent},
{path:'user',component:UserComponent},
{path:'task',component:TaskComponent}

]

@NgModule({
  
   imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})


export class AppRoutingModule {
}
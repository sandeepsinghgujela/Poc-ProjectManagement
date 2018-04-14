import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component'
import {DashboardComponent} from './dashboard/dashboard.component'


// const routes: Routes = [
//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
  
// ];

const routes:Routes=[
{path:'login',component:LoginComponent},
{path:'dashboard',component:DashboardComponent}

]

@NgModule({
  
   imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})


export class AppRoutingModule {
}
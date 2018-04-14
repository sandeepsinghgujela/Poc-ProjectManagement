import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import {LoginComponent} from './login/login.component'

// const routes: Routes = [
//   { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
  
// ];

const routes:Routes=[
{path:'login',component:LoginComponent}
]

@NgModule({
  
   imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  declarations: []
})


export class AppRoutingModule {
}
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUser={
  	email:"",
  	password:""
  }

  login(){
  	console.log('this is a login form',this.loginUser);
  	this.router.navigate(['dashboard']);
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

}

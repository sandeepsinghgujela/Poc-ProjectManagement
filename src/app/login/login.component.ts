  import { Component, OnInit } from '@angular/core';
  import {Router} from "@angular/router"
  import {BaseService} from "../base.service"
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
      this.baseService.login(this.loginUser).subscribe((response)=>{
        if(response.status==="failure"){
          alert('Invalid Username password');
        }
        if(response.status==="success"){
        console.log("login done");
      	this.router.navigate(['dashboard']);
        }

      });
    }

    constructor(private router:Router,private baseService:BaseService) { }

    ngOnInit() {
    }

  }

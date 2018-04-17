import { Component, OnInit } from '@angular/core';
import {BaseService} from '../base.service';	
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
	user={

	};
	allUsers=[];
	addUser(){

		this.baseService.addUser(this.user).subscribe((response)=>{
			console.log('user created ');
		  this.getAllUsers();
    })
	}
  constructor(private baseService:BaseService) { }

  getAllUsers(){
  	this.baseService.getAllUsers().subscribe((res)=>{

  		console.log("got all user",res);
  		this.allUsers=res;
  	}
  		);
  	
  }
  ngOnInit() {
	this.getAllUsers();
  }

}

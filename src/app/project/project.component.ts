import { Component, OnInit } from '@angular/core';
import {BaseService } from '../base.service';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {


  constructor(private baseService:BaseService) { }
  ngOnInit(){}

	addUser(){
		var user ={
	   "name": "Ankidt",
	    "email":"sdfrse@sd.ff",
	    "mobile": "2242532",
	    "designation": "sSE",
	    "role": "SEs"
		};
  		this.baseService.addUser(user).subscribe((res)=>console.log('response',res));
	}


  
}

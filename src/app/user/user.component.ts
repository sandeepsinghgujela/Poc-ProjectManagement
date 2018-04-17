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
	addUser(){

		this.baseService.addUser(this.user).subscribe((response)=>{
			console.log('user created ');
		})
	}
  constructor(private baseService:BaseService) { }

  ngOnInit() {
  }

}

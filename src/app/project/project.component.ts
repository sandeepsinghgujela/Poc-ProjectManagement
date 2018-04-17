
import { Component, OnInit } from '@angular/core';
import {BaseService } from '../base.service';


@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  project={
  	// name:'',
  	// manager:''

  }
  allProjects=[];
  constructor(private baseService:BaseService) { }
  ngOnInit(){
    this.getAllProject();
  }

	addProject(){
		console.log("this.project",this.project);
	
  		this.baseService.addProject(this.project).subscribe((res)=>console.log('response',res));
	}

  getAllProject(){
    this.baseService.getAllProject().subscribe((res)=>{
      this.allProjects=res;
    })
  }


  
}

import { Component, OnInit } from '@angular/core';
import {BaseService} from '../base.service';
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  task={};
  allTasks=[];
  constructor(private baseService:BaseService) { }
  addTask(){
  	this.baseService.addTask(this.task).subscribe((response)=>
      {
      console.log("Task Created")
        this.getAllTasks();
      })
  }
  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks(){
    this.baseService.getAllTasks().subscribe((response)=>{
      this.allTasks=response;
    })
  }


}

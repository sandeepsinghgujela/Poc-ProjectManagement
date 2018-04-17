import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 dataSource: Object;
  title: string;
  dataSource1:Object;
  constructor() { 
  	  this.title = "Angular 2 FusionCharts Sample";

    this.dataSource = {
      "chart": {
        "caption": "Task Status",
        "subCaption": "Developer Wise task status."
      },
      "data": [{
        "label": "Sandeep",
         "value": "3"
      }, {
        "label": "Ankit",
        "value": "4"
      }, {
        "label": "Ramesh",
        "value": "8"
      }, {
        "label": "Navdeep",
        "value": "19"
      }, {
        "label": "Sajal",
        "value": "10"
      }]
    }
    
    this.dataSource1 = {
      "chart": {
        "caption": "Project Srogress",
        "subCaption": "Project Completion Status."
      },
      "data": [{
        "label": "Rent It bae",
         "value": "10"
      }, {
        "label": "Scooopwhoop",
        "value": "20"
      }, {
        "label": "ofbusiness",
        "value": "30"
      }, {
        "label": "Fliplearn",
        "value": "10"
      }, {
        "label": "mypat",
        "value": "15"
      },{
        "label": "Medico",
        "value": "15"
      }]
    }


}


ngOnInit(){}
}

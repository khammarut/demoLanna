import { Component, OnInit } from '@angular/core';
import { FormserviceService } from '../form/formservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  data:any={}
  constructor(private service:FormserviceService) { }

  ngOnInit(): void {
    this.data.count = 0;
    this.service.getProjectApprove().subscribe(result=>{
      this.data = result.data;
      for(var i = 0 ; i < this.data.length ; i++){
        if(result.data[i].progress == true && result.data[i].report == true && result.data[i].creative == true && result.data[i].picdio == true &&
         result.data[i].output == true && result.data[i].dataprogress == true && result.data[i].result == true){
           this.data[i].count =+ 1;
         }
      }    
    });
  }

}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import { FormserviceService } from '../form/formservice.service';

export interface UserData {
  order: string;
  projecthead: string;
  projectname: string;
  department: string;
  budget: string;
}

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  displayedColumns: string[] = ['order','projecthead', 'projectname', 'department' , 'status'];
  dataSource:any;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  data:any={}
  length = ""
  user = ""

  constructor(private router:Router , private http:HttpClient , private service:FormserviceService, private route:ActivatedRoute) {
    
  }

  getdata(){
    this.service.getProjectApprove().subscribe(result=>{
      this.data = result.data;
      this.dataSource = new MatTableDataSource(this.data);
      this.length = this.data.length;  
      for(var i = 0 ; i < this.data.length ; i++){
           this.data[i].order = i+1
           this.dataSource = new MatTableDataSource(this.data);
      }
      for(var i = 0 ; i < this.data.length ; i++){
        if(result.data[i].progress == true && result.data[i].report == true && result.data[i].creative == true && result.data[i].picdio == true &&
         result.data[i].output == true && result.data[i].dataprogress == true && result.data[i].result == true){
           this.data[i].status = "สำเร็จ";
           this.data[i].color = "green";
           this.dataSource = new MatTableDataSource(this.data);
         }else{
           this.data[i].status = "ไม่สำเร็จ";
           this.data[i].color = "red";
           this.dataSource = new MatTableDataSource(this.data);
         }
        }
    });
  }

  ngOnInit() {
    this.route.params.subscribe(prams=>{
      this.user = prams.username
    });

    this.service.getProjectApprove().subscribe(result=>{      
      this.data = result.data;
      this.dataSource = new MatTableDataSource(this.data);
      this.length = this.data.length;
      for(var i = 0 ; i < this.data.length ; i++){
        this.data[i].order = i+1
        this.dataSource = new MatTableDataSource(this.data);
   }
   for(var i = 0 ; i < this.data.length ; i++){
    if(result.data[i].progress == true && result.data[i].report == true && result.data[i].creative == true && result.data[i].picdio == true &&
     result.data[i].output == true && result.data[i].dataprogress == true && result.data[i].result == true){
       this.data[i].status = "สำเร็จ";
       this.data[i].color = "green";
       this.dataSource = new MatTableDataSource(this.data);
     }else{
       this.data[i].status = "ไม่สำเร็จ";
       this.data[i].color = "red";
       this.dataSource = new MatTableDataSource(this.data);
     }
    }
    });
  }

  applyFilter(filterValue: string) {
    console.log(this.dataSource);
    
    this.dataSource.filter = filterValue.trim().toLowerCase(); 
  }

}

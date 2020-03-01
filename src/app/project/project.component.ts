import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import {Router} from "@angular/router";
import { FormserviceService } from '../form/formservice.service';

export interface UserData {
  projectname: string;
  department: string;
}
@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {

  displayedColumns: string[] = ['projectname', 'department' ,"action"];
  dataSource: MatTableDataSource<UserData>;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  data:any={}
  length = ""
  status = false

  constructor(private router:Router , private http:HttpClient , private service:FormserviceService) {
    
  }

  displayform(projectname){
    this.router.navigate(['displayform',{projectname : projectname}]);
  }

  getdata(){
    this.service.getProject().subscribe(result=>{
      this.data = result.data;
      this.dataSource = new MatTableDataSource(this.data);
      this.length = this.data.length;
    });
  }

  ngOnInit() {
    this.service.getProject().subscribe(result=>{
      this.data = result.data;
      this.dataSource = new MatTableDataSource(this.data);
      this.length = this.data.length;      
    });
  }

  pageinput(){
      this.router.navigate(['inputform']);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}

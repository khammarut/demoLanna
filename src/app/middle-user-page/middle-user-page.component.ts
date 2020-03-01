import {Component,OnInit,ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient } from '@angular/common/http';
import {Router , ActivatedRoute} from "@angular/router";
import { FormserviceService } from '../form/formservice.service';

export interface UserData {
  projecthead: string;
  projectname: string;
  department: string;
  budget: string;
  status: string;
}

@Component({
  selector: 'app-middle-user-page',
  templateUrl: './middle-user-page.component.html',
  styleUrls: ['./middle-user-page.component.css']
})

export class MiddleUserPageComponent implements OnInit{
  displayedColumns: string[] = ['projecthead', 'projectname', 'department','budget', 'status' ,"action"];
  dataSource: MatTableDataSource<any>;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  data:any={}
  length = ""
  user = ""

  constructor(private router:Router , private http:HttpClient , private service:FormserviceService , private route:ActivatedRoute) {
    
  }

  getdata(){
    this.service.getProjectApprove().subscribe(result=>{
      this.data = result.data;
      this.dataSource = new MatTableDataSource(this.data);
      this.length = this.data.length;
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

  delete(id){
        this.service.deleteProjectApprove(id).subscribe(result=>{          
          this.getdata();
        });
  }

  update(id){
    this.router.navigate(['updateprojectapprove',{id:id}]);
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

  pageinput(){
      this.router.navigate(['inputprojectapprove']);
  }

  applyFilter(event: Event) {    
    const filterValue = (event.target as HTMLInputElement).value;
    console.log(filterValue);

    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
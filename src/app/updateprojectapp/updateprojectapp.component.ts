import { Component, OnInit } from '@angular/core';
import {ActivatedRoute , Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {FormserviceService} from "../form/formservice.service";
import {Location} from '@angular/common';

@Component({
  selector: 'app-updateprojectapp',
  templateUrl: './updateprojectapp.component.html',
  styleUrls: ['./updateprojectapp.component.css']
})
export class UpdateprojectappComponent implements OnInit {
  data:any={}
  id:"";
  constructor(private route:ActivatedRoute , private http:HttpClient , private service:FormserviceService , private router:Router,
    private location:Location) { }

  ngOnInit(): void {
    this.route.params.subscribe(param=>{
      this.id = param.id;
      this.service.getProjectApp(param.id).subscribe(result=>{
        this.data = result.data[0];
      });
    });
  }

  back(){
    this.location.back();
  }

  update(){
    this.service.updateProjectApprove(this.data).subscribe(result=>{        
      this.location.back();
    })
  }

}

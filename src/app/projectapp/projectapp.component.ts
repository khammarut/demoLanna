import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {Location} from '@angular/common';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-projectapp',
  templateUrl: './projectapp.component.html',
  styleUrls: ['./projectapp.component.css']
})
export class ProjectappComponent implements OnInit {
  data:any={}
  constructor(private http:HttpClient , private router:Router , private location:Location) { }

  ngOnInit(): void {

  }

  back(){
    this.location.back();
  }

  save(){
    this.http.post('http://localhost:3000/projectapprove' , this.data).subscribe(result =>{
      Swal.fire("บันทึกข้อมูลสำเร็จ!", "success");
      this.location.back();
    });
  }

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router";
import { FormserviceService } from '../form/formservice.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private http:HttpClient , private router:Router , private service:FormserviceService) { }

  data : any = {

  }

  ngOnInit(): void {

  }

  login(){     
    this.service.checkLogin(this.data.username , this.data.password).subscribe(result=>{
      if(result.status[0].status == "middle"){
        this.router.navigate(['middleuser' ,  {username : result.status[0].username }]);
      }else if(result.status[0].status == "admin"){
        this.router.navigate(['admin' ,  {username : result.status[0].username }]);
      }else if(result.status[0].status == "user"){
        this.router.navigate(['user' , {username : result.status[0].username }]);
      }else{
        alert("username หรือ password ไม่ถูกต้อง");
      }
    });
  }

}

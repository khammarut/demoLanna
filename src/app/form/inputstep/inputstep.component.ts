import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

import {
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

@Component({
  selector: 'app-inputstep',
  templateUrl: './inputstep.component.html',
  styleUrls: ['./inputstep.component.css']
})
export class InputstepComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any , private dialog: MatDialog , private http:HttpClient) { }
  ngOnInit(): void {
    this.data.one = false;
    this.data.two = false;
    this.data.three = false;
    this.data.four = false;
    this.data.middle = false;
    this.data.north = false;
  }

  close(){
    this.dialog.closeAll();
  }

  save(){  
    this.data.trimas = this.data.one + "," + this.data.two + "," +this.data.three + "," + this.data.four;  
    this.data.area = this.data.middle + "," + this.data.north;        
    this.http.post<any>('http://localhost:3000/step' , this.data).subscribe(result=>{
         this.dialog.closeAll();
    });    
  }

}

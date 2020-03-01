import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

import {
  MAT_DIALOG_DATA
} from "@angular/material/dialog";

@Component({
  selector: 'app-inputbudget',
  templateUrl: './inputbudget.component.html',
  styleUrls: ['./inputbudget.component.css']
})
export class InputbudgetComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any , private dialog: MatDialog , private http:HttpClient) { }
  ngOnInit(): void {
    
  }

  close(){
    this.dialog.closeAll();
  }

  save(){    
    this.http.post<any>('http://localhost:3000/budget' , this.data).subscribe(result=>{
        this.dialog.closeAll();
    });    
  }

}

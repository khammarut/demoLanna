import { Component, OnInit,Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { FormserviceService } from '../formservice.service';

import {
  MAT_DIALOG_DATA
} from "@angular/material/dialog";
@Component({
  selector: 'app-updatedesbudget',
  templateUrl: './updatedesbudget.component.html',
  styleUrls: ['./updatedesbudget.component.css']
})
export class UpdatedesbudgetComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any , private dialog: MatDialog , private http:HttpClient , private service:FormserviceService) { }
  ngOnInit(): void {
    this.service.getDesBudgetid(this.data.id).subscribe(result=>{
      this.data = result.data[0]
    })
  }

  close(){
    this.dialog.closeAll();
  }

  save(){        
       this.service.updateDesBudget(this.data).subscribe(result=>{
        this.dialog.closeAll();
       })
  }

}

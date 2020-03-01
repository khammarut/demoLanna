import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { FormserviceService } from '../form/formservice.service';
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import {Location} from '@angular/common';

@Component({
  selector: 'app-displayform',
  templateUrl: './displayform.component.html',
  styleUrls: ['./displayform.component.css']
})
export class DisplayformComponent implements OnInit {

  seasons: string[] = ['กลยุทธ์ที่ 1 พัฒนาองค์ความรู้ด้านล้านนาและลล้านนาสร้างสรรค์', 'กลยุทธ์ที่ 2 เป็นศูนย์รวมคลังความรู้ พัฒนา เผยแพร่องค์ความรู้และข้อมูลด้านล้านนาคดีและล้านนาสร้างสรรค์'
  , 'กลยุทธ์ที่ 3 นำความรู้ด้านล้านนามาต่อยอดสร้างนวัตกรรมเชิงสร้างสรรค์', 'กลยุทธ์ที่ 4 สร้างสภาพแวดล้อมด้านล้านนาสร้างสรรค์ภายในมหาวิทยาลัย'];
  data:any={}
  username:any={}
  description:any={}
  step:any={}
  output:any={}
  outcome:any={}
  budget:any={}
  budgetlast:any={}
  desbudget:any={}
  risk:any={}

  displayedColumns: string[] = ['activity', 'description'];
  ColumnStep: string[] = ['steps', 'goal', 'pro', 'in', 'etc', 'sub'];
  ColumnOutput: string[] = ['trimas', 'volume','quality','time','cost'];
  ColumnOutcome: string[] = ['trimas', 'volume','quality','time','cost'];
  ColumnBudget: string[] = ['year', 'goal'];
  ColumnBudgetlast: string[] = ['year', 'goal'];
  ColumnDesBudget: string[] = ['activity', 'total'];
  ColumnRisk: string[] = ['step', 'risk','closerisk'];
  dataDescription;
  dataSteps;
  dataOutput;
  dataOutcome;
  dataBudget;
  dataBudgetlast;
  dataDesBudget;
  dataRisk;

  getDescription(){
    this.formservice.getDes(this.data.projectname).subscribe(result => {
      this.description = result.data;    
      this.dataDescription = new MatTableDataSource(this.description);
    });
  }

  getOutput(){
    this.formservice.getOutput(this.data.projectname).subscribe(result => {
      this.output = result.data;    
      this.dataOutput = new MatTableDataSource(this.output);
    });
  }


  getOutcome(){
    this.formservice.getOutcome(this.data.projectname).subscribe(result => {
      this.outcome = result.data;    
      this.dataOutcome = new MatTableDataSource(this.outcome);
    });
  }

  getBudget(){
    this.formservice.getBudget(this.data.projectname).subscribe(result => {
      this.budget = result.data;    
      this.dataBudget = new MatTableDataSource(this.budget);
    });
  }

  getLastBudget(){
    this.formservice.getLastBudget(this.data.projectname).subscribe(result => {
      this.budgetlast = result.data;    
      this.dataBudgetlast = new MatTableDataSource(this.budgetlast);
    });
  }

  getDesBudget(){
    this.formservice.getDesBudget(this.data.projectname).subscribe(result => {
      this.desbudget = result.data;    
      this.dataDesBudget = new MatTableDataSource(this.desbudget);
    });
  }

  getRisk(){
    this.formservice.getRisk(this.data.projectname).subscribe(result => {
      this.risk = result.data;    
      this.dataRisk = new MatTableDataSource(this.risk);
    });
  }
  getStep(){
    this.formservice.getStep(this.data.projectname).subscribe(result => {
      this.step = result.data;    
      this.dataSteps = new MatTableDataSource(this.step);
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      this.data.projectname = params.projectname
    });

    this.getBudget();
    this.getDescription();
    this.getStep();
    this.getOutcome();
    this.getOutput();
    this.getRisk();
    this.getStep();
    this.getDesBudget();
    this.getLastBudget();

    this.formservice.getdisplay(this.data.projectname).subscribe(result=>{
      this.data = result.data[0];
    });
  }

  back(){
    this.location.back();
  }

  constructor(private http:HttpClient , private dialog: MatDialog , private formservice:FormserviceService ,
     private route:ActivatedRoute , private router:Router , private location:Location) {
 
  }

}

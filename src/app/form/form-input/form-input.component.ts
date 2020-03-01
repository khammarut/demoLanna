import { Component, OnInit,Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { InputdesComponent } from '../inputdes/inputdes.component';
import { FormserviceService } from '../formservice.service';
import { InputoutComponent } from '../inputout/inputout.component';
import { InputoutcomeComponent } from '../inputoutcome/inputoutcome.component';
import { InputbudgetComponent } from '../inputbudget/inputbudget.component';
import { InputlastbudgetComponent } from '../inputlastbudget/inputlastbudget.component';
import { InputdesbudgetComponent } from '../inputdesbudget/inputdesbudget.component';
import { InsertriskComponent } from '../insertrisk/insertrisk.component';
import { InputstepComponent } from '../inputstep/inputstep.component';
import {ActivatedRoute} from "@angular/router";
import {Router} from "@angular/router";
import { UpdatedesComponent } from '../updatedes/updatedes.component';
import { UpdatstepComponent } from '../updatstep/updatstep.component';
import { UpdateoutComponent } from '../updateout/updateout.component';
import { UpdatoutcomComponent } from '../updatoutcom/updatoutcom.component';
import { UpdatebudgetComponent } from '../updatebudget/updatebudget.component';
import { UpdatelastbudgetComponent } from '../updatelastbudget/updatelastbudget.component';
import { UpdatedesbudgetComponent } from '../updatedesbudget/updatedesbudget.component';
import { UpdatriskComponent } from '../updatrisk/updatrisk.component';
import {Location} from '@angular/common';


export interface PeriodicElement {
  activity: string;
  description: string;
  steps:string;
  trimas:string;
  goal:string;
  area:string;
  pro:string;in:string;etc:string;sub:string;
  year:string;
  total:string;risk:string;closerisk:string;
  volume:string;quality:string;time:string;cost:string;
}

@Component({
  selector: 'form-input',
  templateUrl: './form-input.component.html',
  styleUrls: ['./form-input.component.css']
})

export class FormInputComponent implements OnInit {
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

  displayedColumns: string[] = ['activity', 'description', 'action'];
  ColumnStep: string[] = ['steps', 'goal', 'pro', 'in', 'etc', 'sub', 'action'];
  ColumnOutput: string[] = ['trimas', 'volume','quality','time','cost', 'action'];
  ColumnOutcome: string[] = ['trimas', 'volume','quality','time','cost', 'action'];
  ColumnBudget: string[] = ['year', 'goal', 'budget','action'];
  ColumnBudgetlast: string[] = ['year', 'goal', 'budget','action'];
  ColumnDesBudget: string[] = ['activity', 'total','action'];
  ColumnRisk: string[] = ['step', 'risk','closerisk','action'];
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

  deleteDes(id){
    this.formservice.deleteDes(id).subscribe(result=>{
        this.getDescription();
    });
  }

  getOutput(){
    this.formservice.getOutput(this.data.projectname).subscribe(result => {
      this.output = result.data;    
      this.dataOutput = new MatTableDataSource(this.output);
    });
  }

  deleteOutput(id){
    this.formservice.deleteOutput(id).subscribe(result=>{
        this.getOutput();
    });
  }

  getOutcome(){
    this.formservice.getOutcome(this.data.projectname).subscribe(result => {
      this.outcome = result.data;    
      this.dataOutcome = new MatTableDataSource(this.outcome);
    });
  }

  deleteOutcome(id){
    this.formservice.deleteOutcome(id).subscribe(result=>{
        this.getOutcome();
    });
  }

  openSimpleDialog() {
    this.dialog.open(InputdesComponent, {
         width: '600px',
         data : {projectname : this.data.projectname}
    });

    this.dialog.afterAllClosed.subscribe(result => {
      this.getDescription();
    });
  }

  UpdateDes(id) {
    this.dialog.open(UpdatedesComponent, {
         width: '600px',
         data : {id : id}
    });

    this.dialog.afterAllClosed.subscribe(result => {
      this.getDescription();
    });
  }

  openOutput() {
    this.dialog.open(InputoutComponent, {
         width: '600px',
         height: '700px',
         data : {projectname : this.data.projectname}
    });

    this.dialog.afterAllClosed.subscribe(result => {
      this.getOutput();
    });
  }

  updateOutput(id) {
    this.dialog.open(UpdateoutComponent, {
         width: '600px',
         height: '700px',
         data : {id : id}
    });

    this.dialog.afterAllClosed.subscribe(result => {
      this.getOutput();
    });
  }

  openOutcome() {
    this.dialog.open(InputoutcomeComponent, {
         width: '600px',
         height: '700px',
         data : {projectname : this.data.projectname}
    });

    this.dialog.afterAllClosed.subscribe(result => {
      this.getOutcome();
    });
  }

  updateOutcome(id) {
    this.dialog.open(UpdatoutcomComponent, {
         width: '600px',
         height: '700px',
         data : {id : id}
    });

    this.dialog.afterAllClosed.subscribe(result => {
      this.getOutcome();
    });
  }

  openBudget() {
    this.dialog.open(InputbudgetComponent, {
         width: '550px',
         data : {projectname : this.data.projectname}
    });

    this.dialog.afterAllClosed.subscribe(result => {
      this.getBudget();
    });
  }

  updateBudget(id) {
    this.dialog.open(UpdatebudgetComponent, {
         width: '550px',
         data : {id : id}
    });

    this.dialog.afterAllClosed.subscribe(result => {
      this.getBudget();
    });
  }

  getBudget(){
    this.formservice.getBudget(this.data.projectname).subscribe(result => {
      this.budget = result.data;    
      this.dataBudget = new MatTableDataSource(this.budget);
    });
  }

  deleteBudget(id){
    this.formservice.deleteBudget(id).subscribe(result=>{
        this.getBudget();
    });
  }

  openLastBudget(){
    this.dialog.open(InputlastbudgetComponent,{
      width: '550px',
      data : {projectname : this.data.projectname}
    });

    this.dialog.afterAllClosed.subscribe(result => {
      this.getLastBudget();
    });
  }

  updateLastBudget(id){
    this.dialog.open(UpdatelastbudgetComponent,{
      width: '550px',
      data : {id : id}
    });

    this.dialog.afterAllClosed.subscribe(result => {
      this.getLastBudget();
    });
  }

  getLastBudget(){
    this.formservice.getLastBudget(this.data.projectname).subscribe(result => {
      this.budgetlast = result.data;    
      this.dataBudgetlast = new MatTableDataSource(this.budgetlast);
    });
  }

  deleteLastBudget(id){
    this.formservice.deleteLastBudget(id).subscribe(result=>{
        this.getLastBudget();
    });
  }

  openDesBudget(){
    this.dialog.open(InputdesbudgetComponent,{
      width: '600px',
      height : '700px',
      data : {projectname : this.data.projectname}
    });

    this.dialog.afterAllClosed.subscribe(result => {
      this.getDesBudget();
    });
  }

  updateDesBudget(id){
    this.dialog.open(UpdatedesbudgetComponent,{
      width: '600px',
      height : '700px',
      data : {id : id}
    });

    this.dialog.afterAllClosed.subscribe(result => {
      this.getDesBudget();
    });
  }

  getDesBudget(){
    this.formservice.getDesBudget(this.data.projectname).subscribe(result => {
      this.desbudget = result.data;    
      this.dataDesBudget = new MatTableDataSource(this.desbudget);
    });
  }

  deleteDesBudget(id){
    this.formservice.deleteDesBudget(id).subscribe(result=>{
        this.getDesBudget();
    });
  }

  openRisk(){
    this.dialog.open(InsertriskComponent,{
      width: '550px',
      data : {projectname : this.data.projectname}
    });

    this.dialog.afterAllClosed.subscribe(result => {
      this.getRisk();
    });
  }

  updateRisk(id){
    this.dialog.open(UpdatriskComponent,{
      width: '550px',
      data : {id : id}
    });

    this.dialog.afterAllClosed.subscribe(result => {
      this.getRisk();
    });
  }

  getRisk(){
    this.formservice.getRisk(this.data.projectname).subscribe(result => {
      this.risk = result.data;    
      this.dataRisk = new MatTableDataSource(this.risk);
    });
  }

  deleteRisk(id){
    this.formservice.deleteRisk(id).subscribe(result=>{
        this.getRisk();
    });
  }

  openStep(){
    this.dialog.open(InputstepComponent,{
      width: '550px',
      data : {projectname : this.data.projectname}
    });

    this.dialog.afterAllClosed.subscribe(result => {
      this.getStep();
    });
  }

  getStep(){
    this.formservice.getStep(this.data.projectname).subscribe(result => {
      this.step = result.data;    
      this.dataSteps = new MatTableDataSource(this.step);
    });
  }

  updateStep(id){
    this.dialog.open(UpdatstepComponent,{
      width: '550px',
      data : {id : id}
    });

    this.dialog.afterAllClosed.subscribe(result => {
      this.getStep();
    });
  }


  deleteStep(id){
    this.formservice.deletestep(id).subscribe(result=>{
        this.getStep();
    });
  }

  save(){
    this.http.post('http://localhost:3000/project' , this.data).subscribe(result=>{
      console.log(result);
      
      this.location.back();
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params=>{
      
    });
  }

  back(){
    this.location.back();
  }

  constructor(private http:HttpClient , private dialog: MatDialog , private formservice:FormserviceService ,
     private route:ActivatedRoute , private router:Router , private location:Location) {
 
  }
}

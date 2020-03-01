import { Component, OnInit } from '@angular/core';
import {Router , ActivatedRoute} from "@angular/router";

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  user = "";
  isProject:boolean = false;
  isProjectApp:boolean = false;
  isDash:boolean = true;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(prams=>{
      this.user = prams.username
    });
  }

}

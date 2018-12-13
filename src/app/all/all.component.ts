import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {DataService} from "../data.service"


@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
  providers:[DataService]
})
export class AllComponent implements OnInit {

  event: string[]=[''];
  getEventfromService(){
    this.event = this.dataSer.getAct();
  }
  constructor(private dataSer: DataService) { }

  ngOnInit() {
  }

}

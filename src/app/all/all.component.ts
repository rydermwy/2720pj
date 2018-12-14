import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import {DataService} from "../data.service";
import {EventObj} from "../event"

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css'],
  providers:[DataService]
})
export class AllComponent implements OnInit {

  events: EventObj[];

  constructor(private dataSer: DataService) { }

  ngOnInit() {
    this.getAct();
  }

  getAct(): void{
    this.dataSer.getAct()
        .subscribe(events=>this.events = events);
  }


}

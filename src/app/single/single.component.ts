import { Component, OnInit } from '@angular/core';
declare var jquery:any;
declare let $:any;

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    $(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
  }

}

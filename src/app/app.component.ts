import { Component,OnInit } from '@angular/core';
import {activities} from './activities.json';
declare var jquery:any;
declare let $:any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']

})
export class AppComponent implements OnInit{
  title = 'Hello~';
  

public ngOnInit(){
  $(document).ready(function(){
    $('.carousel').carousel({
  interval: 2000
  });
    });
}
}

import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { HttpClient } from "@angular/common/http";

class Customer {
    id : number;
  permitNumber: string;
  districtNameEnglish: string;
  tel: string;
}

@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.css']
})
export class AllComponent implements OnInit {
/*
  constructor() { }

  ngOnInit() {
  }
*/
customersObservable : Observable<Customer[]>;

    constructor(private httpClient:HttpClient) {}

    ngOnInit() {
        this.customersObservable = this.httpClient
            .get<Customer[]>("http://fundraising.one.gov.hk/fundraise_query/webservice/psi/json?");
    }
}

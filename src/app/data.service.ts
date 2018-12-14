import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { EventObj } from './event';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {}
    getAct(): Observable<EventObj[]> {
      return this.http.get<EventObj[]>('https://www.lcsd.gov.hk/datagovhk/event/leisure_prog.json');
    }



}

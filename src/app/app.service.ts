import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private _URL = '../../assets/carMockItineraries.json';
  constructor(private http: HttpClient) { }

  private _searchCriteria: any = {};

  getCarsList() {
    return this.http.get(this._URL).pipe(map((data) => data || []));
  }

  set searchCriteria(data: any) {
    this._searchCriteria = data;   
  }

  get searchCriteria(): any {
    return this._searchCriteria;
  }

}

import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { AppService } from '../app.service';
import { IPaging, ICarItineraries } from '../car.model';
import { loadCars } from '../store/action/car.actions';
import { getCarListByName } from '../store/selector/car.selectors';

@Component({
  selector: 'app-cars-results',
  templateUrl: './cars-results.component.html',
  styleUrls: ['./cars-results.component.css']
})
export class CarsResultsComponent implements OnInit {

  carList$ = this.store.pipe(select(getCarListByName('')));
  carItineraries: Array<ICarItineraries> = [];
  currency!: string;
  paging!: IPaging;

  constructor(private appService: AppService,
     private store: Store<{ car: any[] }>) {
      // this.carList$ = this.store.pipe(select(getCarListByName(appService.searchCriteria)));
  }

  ngOnInit(): void {
    this.store.dispatch(loadCars());
    this.carList$.subscribe((result: any) => {
      if (result) {
        this.carItineraries = result.carMockItineraries?.CarItineraries;
        console.log(this.carItineraries);        
        this.currency = result.carMockItineraries?.currency;
        console.log(this.currency);
        this.paging = result.carMockItineraries?.paging;
        console.log(this.paging);
      }

    });
  }

  getCars(searchString: string) {
    this.carList$ = this.store.pipe(select(getCarListByName(this.appService.searchCriteria)));
  }

}

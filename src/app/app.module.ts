import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { CarsSearchComponent } from './cars-search/cars-search.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { CarsResultsComponent } from './cars-results/cars-results.component';
import { StoreModule } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { CarEffects } from './car.effects';
import { carReducer } from './store/reducer/car.reducer';
import { DatePipe } from '@angular/common';


@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: CarsSearchComponent },
      { path: 'search', component: CarsSearchComponent },
      { path: 'results', component: CarsResultsComponent }
    ]),
    HttpClientModule,
    BrowserAnimationsModule,
    NgMaterialModule,
    EffectsModule.forRoot([CarEffects]),
    StoreModule.forRoot({car: carReducer }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    CarsSearchComponent,
    CarsResultsComponent,
    NavBarComponent,
  ],
  providers: [AppService, DatePipe],
  bootstrap: [AppComponent],
})
export class AppModule {}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/

import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { driver_age } from '../driver-age';

@Component({
  selector: 'app-cars-search',
  templateUrl: './cars-search.component.html',
  styleUrls: ['./cars-search.component.css'],
})
export class CarsSearchComponent implements OnInit {
  carSearchForm: FormGroup = new FormGroup({});
  titleAlert: string = 'This field is required';
  post: any = '';
  driverAges = driver_age;
  constructor(private appService: AppService,
    private formBuilder: FormBuilder,
    private router: Router){
  }  

  ngOnInit(): void {    
    this.createForm();
  }

  createForm() {
    this.carSearchForm = this.formBuilder.group({
      'pickupLocation': [null, [Validators.required, Validators.minLength(5), Validators.maxLength(500)]],
      'pickUpTime': [null],
      'dropOffTime': [null],
      'pickUpDate': [null],
      'dropOffDate': [null],
      'ageOfDriver': [null]
    });
  }

  onSubmit(data: any): void {
    this.appService.searchCriteria = data;
    this.router.navigate(['/results']);
  }
}

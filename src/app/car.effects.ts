import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { mergeMap, map } from "rxjs/operators";
import { AppService } from "./app.service";

@Injectable()
export class CarEffects{
    constructor(private $actions: Actions,
        private appService: AppService){ };

    $loadEmployeeList = createEffect(() => 
        this.$actions.pipe(ofType('[Car] Load Cars'),
        mergeMap(() => 
            this.appService.getCarsList()
            .pipe(
                map((data) => ({type: '[Car] Load Cars Success', carList: data})))
        ))
    );
} 
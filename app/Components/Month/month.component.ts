import { Month } from './../../Models/Month/month.model';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'month',
    templateUrl: './../../Views/month.html',
    styleUrls: ['./../../Views/css/month.css']    
})
export class MonthComponent{

    month: Month;

    constructor(){
        this.month = new Month( new Date(2015, 3) ); 
    }
}
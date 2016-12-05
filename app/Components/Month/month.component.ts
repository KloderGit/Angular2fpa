import { MonthCalendar } from './../../Models/Month/month.model';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'month',
    templateUrl: './../../Views/month.html',
    styleUrls: ['./../../Views/css/month.css']    
})
export class MonthComponent{

    month: MonthCalendar;

    constructor(){
        this.month = new MonthCalendar( new Date(2015, 3) ); 
    }
}
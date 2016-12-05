import { DataService } from './../../Services/data.service';
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

    constructor(private dataService: DataService){
        this.month = new MonthCalendar( new Date(2015, 3) ); 
    }

    addEvent(){
        this.dataService.addItem();
    }
}
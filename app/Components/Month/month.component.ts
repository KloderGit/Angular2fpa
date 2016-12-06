import { Component, Input, OnInit } from '@angular/core';

import { DataService } from './../../Services/data.service';
import { MonthCalendar } from './../../Models/Month/month.model';

@Component({
    moduleId: module.id,
    selector: 'month',
    templateUrl: './../../Views/month.html',
    styleUrls: ['./../../Views/css/month.css']    
})
export class MonthComponent implements OnInit{

    @Input() month: Date;

    monthCalendar: MonthCalendar;

    constructor(private dataService: DataService){
    }

    ngOnInit(){
        this.monthCalendar = new MonthCalendar( this.month ); 
        debugger;

    }

    addEvent(){
        this.dataService.addItem();
    }
}
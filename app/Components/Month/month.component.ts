import { EventOfDay } from './../../Models/eventOfDay';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';

import { DataService } from './../../Services/data.service';
import { MonthCalendar } from './../../Models/Month/month.model';

@Component({
    moduleId: module.id,
    selector: 'month',
    templateUrl: './../../Views/month.html',
    styleUrls: ['./../../Views/css/month.css']    
})
export class MonthComponent implements OnInit, OnChanges{

    @Input() month: Date;
    @Input() events: EventOfDay[];

    monthCalendar: MonthCalendar;

    constructor(private dataService: DataService){
    }

    ngOnInit(){
        this.monthCalendar = new MonthCalendar( this.month, this.events ); 
        debugger;
    }

    ngOnChanges( changes: SimpleChanges ){
        console.log("Обновление");

        this.monthCalendar = null;
        this.monthCalendar = new MonthCalendar( this.month, this.events ); 
    }

    addEvent(){
        this.dataService.addItem();
    }
}
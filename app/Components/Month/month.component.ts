import { Component, Input, OnInit } from '@angular/core';

import { MonthCalendar } from './../../Models/Month/month.model';

@Component({
    moduleId: module.id,
    selector: 'month',
    templateUrl: './../../Views/month.html',
    styleUrls: ['./../../Views/css/month.css']    
})
export class MonthComponent{

    @Input() month: Date;

    monthCalendar: MonthCalendar;



    addEvent(){
    }
}
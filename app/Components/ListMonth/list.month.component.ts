import { EventOfDay } from './../../Models/eventOfDay';
import { DataService } from './../../Services/data.service';
import { MonthCalendar } from './../../Models/Month/month.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'listmonth',
    template: `
    <div *ngFor="let cm of listMonts">
        <month [month] = "cm"></month>
    </div>    
    `
})
export class ListMonth implements OnInit{

    // events: EventOfDay[] = this.dataService.getServiceData();

    listMonts: Date[] = this.dataService.getAviableMonth();

    constructor(private dataService: DataService){}

    ngOnInit(){
    }

    
}
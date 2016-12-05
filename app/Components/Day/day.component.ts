import { DataService } from './../../Services/data.service';
import { Component } from '@angular/core';
import { EventOfDay } from './../../Models/eventOfDay';

@Component({
    moduleId: module.id,
    selector: 'day',
    templateUrl: './../../Views/day.html',
    styleUrls: ['./../../Views/css/day.css'],
    providers: [ DataService ]
})
export class DayComponent{
    event: EventOfDay;

    constructor( private dataService: DataService ){

        debugger;

        this.event = dataService.findItem( new Date("15/12/2016") );
    }

}
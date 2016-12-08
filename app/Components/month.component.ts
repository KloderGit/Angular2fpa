import { CalendarGrid } from './../Models/calendar.mode';
import { Event } from './../Models/event.model';
import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'month',
    styleUrls: ['./../Views/css/month.css'],
    templateUrl: './../Views/month.html' 
})
export class Month{
    @Input() events: Event[];

    grid = new CalendarGrid( new Date(2015,3,10));
}
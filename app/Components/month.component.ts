import { CalendarGrid } from './../Models/calendar.mode';
import { Event } from './../Models/event.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'month',
    styleUrls: ['./../Views/css/month.css'],
    templateUrl: './../Views/month.html' 
})
export class Month implements OnInit{
    @Input() events: Event[];

    grid: CalendarGrid; 

    ngOnInit(){
        this.grid = new CalendarGrid( this.events[0].date );   
    }    
}
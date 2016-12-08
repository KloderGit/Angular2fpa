import { events } from './../../Data/events.data';
import { EventOfDay } from './../../Models/eventOfDay';
import { Component } from '@angular/core';

@Component({
    selector: 'discipline',
    template: `
        <div>
            <monthsList [EventsOfMonth] = "EventsOfMonth"></monthsList>
        </div>

        <button (click)="Add()">Add</button>
                <button (click)="Del()">Del</button>

    `
})
export class Discipline {
    EventsOfMonth: EventOfDay[] = events;

    Add(){
        this.EventsOfMonth.push( new EventOfDay( "DDDDD", new Date(2015,3,25), 5) );
    }
    
    Del(){
        this.EventsOfMonth.splice(2,1)
    }
}
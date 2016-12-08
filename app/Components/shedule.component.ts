import { events } from './../Data/mock.data';
import { Event } from './../Models/event.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'shedule',
    styleUrls: ['app/Views/css/shedule.css'],
    template: `
        <div>
            <calendar [events] = "events"></calendar>
        </div>
        <button (click) = "Add()">Add</button>
                <button (click) = "Upd()">Upd</button>

    `
    // templateUrl: 'app/Views/shedule.html'
})

export class Shedule implements OnInit{
    events: Event[];

    constructor(){
        this.events = []; 
    }

    ngOnInit(){
        this.events = events;
    }

    Add(){
        this.events.push( new Event( "999", new Date(2015, 5, 28) ) );
    }

    Upd(){
        this.events[2].id = "99999";
    }
}
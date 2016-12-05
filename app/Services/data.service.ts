import { EventOfDay } from './../Models/eventOfDay';
import { Injectable, OnInit } from '@angular/core';


@Injectable()
export class DataService extends OnInit {
    events: EventOfDay[];

    ngOnInit(){
        this.events = new Array<EventOfDay>();
        this.events = [
            new EventOfDay("qqqq", new Date("2/12/2016"), 5),
            new EventOfDay("wwww", new Date("12/12/2016"), 5),
            new EventOfDay("eeee", new Date("22/12/2016"), 5),
            new EventOfDay("rrrr", new Date("5/12/2016"), 5),
            new EventOfDay("tttt", new Date("15/12/2016"), 5),
            new EventOfDay("yyyy", new Date("25/12/2016"), 5),
            new EventOfDay("uuuu", new Date("9/12/2016"), 5),
            new EventOfDay("iiii", new Date("19/12/2016"), 5)
        ];
    }

    getServiceData() {
        return this.events;
    }

    findItem(search: Date) {
    for(let i=0; i < this.events.length; i++){
        if(this.events[i].Date == search) {
            return this.events[i];
        }
    }
    }
}
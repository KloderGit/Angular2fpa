import { Event } from './../Models/event.model';
import { Component, Input } from '@angular/core';


@Component({
    selector: 'calendar',
    template: `
        <div>
            <month [events] = "curData()"></month>
        </div>
    `
})
export class Calendar{
    _events: Event[];
      
    @Input()
    set events(array: Event[]) {
        this._events = array;
        console.log("Обновление");
    }
    get events() { return this._events; }

    curData(){
        return this._events;
    }
}
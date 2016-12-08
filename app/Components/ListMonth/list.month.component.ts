import { events } from './../../Data/events.data';
import { EventOfDay } from './../../Models/eventOfDay';
import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Component({
    selector: 'monthsList',
    template: `
        <div>
            <p *ngFor = "let event of EventsOfMonth">
                {{event.Id}}
            </p>
        </div>
    `
})
export class ListMonth implements OnInit, OnChanges {
    @Input() EventsOfMonth: EventOfDay[];
    
    ngOnChanges(changes: SimpleChanges){
     for (let propName in changes) {
        let chng = changes[propName];
        let cur  = JSON.stringify(chng.currentValue);
        let prev = JSON.stringify(chng.previousValue);
        console.log(`${propName}: currentValue = ${cur}, previousValue = ${prev}`);
      }
    }

    ngOnInit(){
        // debugger;
    }
}
import { Event } from './../Models/event.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'day',
    template: `
        <p *ngIf = "event != null" >{{event.id}}</p>
        <!--<p *ngIf = "event != null" >{{event.date.getDate()}}</p>-->
    `
})
export class Day{
    @Input() event: Event;
}
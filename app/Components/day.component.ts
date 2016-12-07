import { Event } from './../Models/event.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'day',
    template: `
        <p>{{event.id}}</p>
    `
})
export class Day{
    @Input() event: Event;
}
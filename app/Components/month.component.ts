import { Event } from './../Models/event.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'month',
    template: `
            <p *ngFor = "let event of events">
                <day [event] = "event"></day>
            </p>
    `
})
export class Month{
    @Input() events: Event[];
}
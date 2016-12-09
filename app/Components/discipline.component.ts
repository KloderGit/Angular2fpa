import { Discipline } from './../Models/discipline.model';
import { Component, Input } from '@angular/core';

import { events } from './../Data/events.mock.data';
import { Event } from './../Models/event.model';

@Component({
    selector: 'discipline',
    template: `
        <!-- <h2>{{events[0].discipline.title}}</h2> -->
        <div>
            <calendar [events] = "events"></calendar>
        </div>
    `
})
export class DisciplineComponent{
    @Input() events: Event[];
}
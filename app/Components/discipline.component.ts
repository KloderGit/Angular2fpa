import { Discipline } from './../Models/discipline.model';
import { Component, Input } from '@angular/core';

import { events } from './../Data/events.mock.data';
import { Event } from './../Models/event.model';

@Component({
    selector: 'discipline',
    template: `
        <div>
            <calendar [events] = "events"></calendar>
        </div>
    `
})
export class DisciplineComponent{
    @Input() events: Event[];
    @Input() discipline: Discipline;
}
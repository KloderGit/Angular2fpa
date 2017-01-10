import { Discipline } from './../Models/discipline.model';
import { Component, Input } from '@angular/core';

import { events } from './../Data/events.mock.data';
import { ControlRegister } from './../Models/control-register.model';

@Component({
    selector: 'discipline',
    template: `
        <div>
            <calendar [events] = "events"></calendar>
        </div>
    `
})
export class DisciplineComponent{
    @Input() events: ControlRegister[];
    @Input() discipline: Discipline;
}
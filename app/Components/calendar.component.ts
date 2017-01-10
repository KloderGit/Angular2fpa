import { ControlRegister } from './../Models/control-register.model';
import { Component, Input } from '@angular/core';


@Component({
    selector: 'calendar',
    template: `
        <div *ngFor = "let month of events | month">
            <month [events] = "month"></month>
        </div>
    `
})
export class CalendarComponent{
    @Input() events: ControlRegister[];
}
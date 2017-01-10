import { ControlRegister } from './../Models/control-register.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'day',
    template: `
        <div *ngIf = "event != null" >
            <p *ngFor = "let evnt of event">
                {{evnt.id}}
            <p>
        </div>
    `
})
export class DayComponent{
    @Input() event: ControlRegister[];
}
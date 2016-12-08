import { events } from './../../Data/events.data';
import { Component } from '@angular/core';

@Component({
    selector: 'watch',
    template: `
        <ul>
            <li *ngFor = "let item of itemsArray">{{item.Id}}</li>
        </ul>
    `
})
export class WatchData{
       itemsArray = events;
}
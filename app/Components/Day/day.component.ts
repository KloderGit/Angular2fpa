import { Component } from '@angular/core';
import { Event } from './../../Models/event';

@Component({
    moduleId: module.id,
    selector: 'day',
    templateUrl: './../../Views/day.html',
    styleUrls: ['./../../Views/css/day.css']
})
export class DayComponent{
    event: Event;
}
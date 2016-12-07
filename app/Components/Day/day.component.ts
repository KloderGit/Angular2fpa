import { calendarDay } from './../../Models/Month/day.month.model';
import { Component, Input } from '@angular/core';
import { EventOfDay } from './../../Models/eventOfDay';

@Component({
    moduleId: module.id,
    selector: 'day',
    templateUrl: './../../Views/day.html',
    styleUrls: ['./../../Views/css/day.css']
})
export class DayComponent {

    @Input() eventDay: calendarDay;

}
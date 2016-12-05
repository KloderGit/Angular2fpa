import { DataService } from './../../Services/data.service';
import { Component, Input, OnInit } from '@angular/core';
import { EventOfDay } from './../../Models/eventOfDay';

@Component({
    moduleId: module.id,
    selector: 'day',
    templateUrl: './../../Views/day.html',
    styleUrls: ['./../../Views/css/day.css'],
    providers: [DataService]
})
export class DayComponent {

    @Input() date;

    event: EventOfDay;

   constructor(private dataService: DataService){ }

    ngOnInit() {
        this.event = this.dataService.findItem(this.date);
    }
}
import { Event } from './../../Models/event.model';
import { Component, Input } from '@angular/core';

@Component({
    selector: 'sheet-list',
    templateUrl: 'sheet-list.html'
})

export class SheetList{
    @Input() sheets: Event;
}
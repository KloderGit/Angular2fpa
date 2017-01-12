import { Component, Output, EventEmitter, ElementRef } from '@angular/core';
declare var jQuery:any;

@Component({
    selector: 'time-picker',
    template: `
        <p><input type="time" (change) = "onChange($event.target)"></p>
    `
})
export class TimePicker{

    @Output() timepickerChanged = new EventEmitter<number[]>();

    onChange( element: HTMLInputElement ){
        let array = element.value.split(':');
        this.timepickerChanged.emit([ parseInt(array[0]), parseInt(array[1]) ]);
    }
}
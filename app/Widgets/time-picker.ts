import { Component, Output, EventEmitter, ElementRef } from '@angular/core';
declare var jQuery:any;

@Component({
    selector: 'time-picker',
    template: `
        <div class="input-group input-group-lg" style="width: 300px">
            <span class="input-group-addon">
                <span class="glyphicon glyphicon-time" aria-hidden="true"></span>
            </span>
            <input type="time" class="form-control" aria-describedby="sizing-addon1" (change) = "onChange($event.target)">
        </div>
    `
})
export class TimePicker{

    @Output() timepickerChanged = new EventEmitter<number[]>();

    onChange( element: HTMLInputElement ){
        let array = element.value.split(':');
        this.timepickerChanged.emit([ parseInt(array[0]), parseInt(array[1]) ]);
    }
}
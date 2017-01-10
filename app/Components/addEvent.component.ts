import { Component } from '@angular/core';

@Component({
    selector: 'add-event',
    template: `
        <div style="margin: 0 0 30px 0">
            <range-time (rangeChanged) = "ChangeRange($event)"></range-time>
        </div>

        <div style="width:600px; margin: 0 auto">
        <hour-list [range_min] = "min" [range_max] = "max"></hour-list>
        </div>
    `    
})
export class AddEvent{

    min: number;
    max: number;

    constructor(){
        // this.min = 10;
        // this.max = 23;
    }

    ChangeRange(range: number[]){
        this.min = range[0];
        this.max = range[1];
    }

}
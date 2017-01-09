import { Component } from '@angular/core';

@Component({
    selector: 'add-event',
    template: `
        <div>
            <range-time (rangeChanged) = "ChangeRange($event)"></range-time>
        </div>

            <hour-list [range_min] = "min" [range_max] = "max"></hour-list>
    `    
})
export class AddEvent{

    min: number;
    max: number;

    constructor(){
        this.min = 10;
        this.max = 23;
    }

    ChangeRange(range: number[]){
        this.min = range[0];
        this.max = range[1];
    }

}
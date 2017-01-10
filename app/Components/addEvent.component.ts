import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

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
export class AddEvent implements OnInit{

    dayDate: Date = new Date();

    min: number;
    max: number;

    constructor( private route: ActivatedRoute,
                 private router: Router ){
        // this.min = 10;
        // this.max = 23;
    }

    ngOnInit(){
        this.dayDate.setTime( this.route.snapshot.params['data'] );
    }

    ChangeRange( range: number[] ){
        this.min = range[0];
        this.max = range[1];
    }

}
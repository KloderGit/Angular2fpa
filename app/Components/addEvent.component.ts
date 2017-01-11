import { MinuteOfHour } from './../Models/minute-of-hour.model';
import { RangeOfHour } from './../Models/range-of-hour.model';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'add-event',
    template: `
        <div style="margin: 0 0 30px 0">
            <range-time (sliderChanged) = "ChangeLimits($event)"></range-time>
        </div>

        <h3>{{dayDate}}</h3>

        <p>range_min - {{min_hour}}</p>
        <p>range_max - {{max_hour}}</p>
        <p>Часов - {{hoursCount}}</p>
        <p>Минут - {{minutesCount}}</p>

        <button (click) = "divideRange(55)">Разбить по 10 минут</button>

        <div style="width:600px; margin: 0 auto">
            <hour-list  [range_min_hour] = "min_hour" 
                        [range_max_hour] = "max_hour"
                        [rangesArray] = "ranges"
                        [minutesArray] = "arrayMinutes"
            ></hour-list>
        </div>


    `    
})
export class AddEvent implements OnInit{

    dayDate: Date = new Date();

    min_hour: number;
    max_hour: number;

    hoursCount: number;
    minutesCount: number;

    ranges: RangeOfHour[] = [];
    arrayMinutes: MinuteOfHour[] = [];

    constructor( private route: ActivatedRoute ){}

    ngOnInit(){
        this.dayDate.setTime( this.route.snapshot.params['data'] );
    }

    ChangeLimits( range: number[] ){
        this.min_hour = range[0];
        this.max_hour = range[1];
        this.hoursCount = this.max_hour - this.min_hour;
        this.minutesCount = this.hoursCount * 60;
    }

    divideRange( vector: number ){
        this.ranges = [];
        this.arrayMinutes = [];

        let tempDate = this.dayDate;
        let minuteSum = 0;
        for ( let i = 0; i < this.minutesCount / vector; i++ ){
            
            tempDate.setHours( this.min_hour, minuteSum);
            let section = new RangeOfHour( tempDate, vector );
            this.ranges.push(section);

            // let m = tempDate.getMinutes();
            // for( let j = m + 1; j < m + vector; j++){
            //     this.arrayMinutes.push( new MinuteOfHour(section.id, j) );
            // }

            minuteSum += vector;
        }
    }
}


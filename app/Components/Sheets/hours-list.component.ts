import {
    MinuteOfHour
} from './../../Models/minute-of-hour.model';
import {
    RangeOfHour
} from './../../Models/range-of-hour.model';
import {
    Component,
    Input,
    OnInit
} from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'hour-list',
    templateUrl: 'hours-list.html',
    styleUrls: ['hours-list.css']
})
export class HoursList implements OnInit {
    @Input() range_min_hour: number;
    @Input() range_max_hour: number;
    @Input() rangesArray: RangeOfHour[];
    @Input() minutesArray: MinuteOfHour[];

    constructor() {}

    ngOnInit() { }

    rangeDivide() {
        let rowCount = this.range_max_hour - this.range_min_hour;
        let result: number[] = [];
        for (let i = 0; i < rowCount; i++) {
            result.push(this.range_min_hour + i);
        }

        return result;
    }

    ddd(){
        console.log( this.prepare() );
    }

    prepare() {
        let objFull = {
            hours: []
        };

        let oststok;

        for (let h = this.range_min_hour; h < this.range_max_hour; h++) {
            let hour = [];

            if (oststok != undefined) {
                let obj = {
                    id: oststok.id,
                    min: oststok.minute,
                    width: oststok.width
                };

                hour.push(obj);
                oststok = undefined;
            }

            let array = this.rangesArray.filter(
                (item) => {
                    return item.hour == h;
                }
            );

            for (let i = 0; i < array.length; i++) {
                let currentRange = array[i];
                if (currentRange.width + currentRange.minute <= 60) {
                    let obj = {
                        id: currentRange.id,
                        min: currentRange.minute,
                        width: Math.floor(100 / ( 60 / currentRange.width ))
                    };
                    hour.push(obj);
                    oststok = undefined;
                }

                if (currentRange.width + currentRange.minute > 60) {
                    let obj = {
                        id: currentRange.id,
                        min: currentRange.minute,
                        width: Math.floor(100 / ( 60 / ( 60 - currentRange.minute ) ))
                    };
                    hour.push(obj);

                    oststok = {
                        id: currentRange.id,
                        min: currentRange.minute,
                        width: Math.floor(100 / ( 60 / ( currentRange.width - ( 60 - currentRange.minute ) ) ))
                    };
                }
            }
            objFull.hours.push(hour);
        }
        console.log(objFull);
        return objFull;
    }
}
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

    ooo;

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
        this.ooo = this.prepare();
        console.log(this.ooo);
    }

    prepare() {
        let objFull = {
            hours: []
        };

        let oststok;

        for (let h = this.range_min_hour; h < this.range_max_hour; h++) {
            let hour = [];
debugger;
            if (oststok != undefined) {
                let obj = {
                    id: oststok.id,
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
                let currentRange = this.rangesArray[i];

                if (currentRange.width + currentRange.minute < 60) {
                    let obj = {
                        id: currentRange.id,
                        width: currentRange.width
                    };
                    hour.push(obj);
                    oststok = undefined;
                }

                if (currentRange.width + currentRange.minute > 60) {
                    let obj = {
                        id: currentRange.id,
                        width: 60 - currentRange.minute
                    };
                    hour.push(obj);

                    oststok = {
                        id: currentRange.id,
                        width: currentRange.width - ( 60 - currentRange.minute )
                    };
                }
            }
            objFull.hours.push(hour);
        }
        return objFull;
    }
}
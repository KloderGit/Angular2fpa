import {
    EventOfDay
} from './../Models/eventOfDay';
import {
    Injectable, OnInit
} from '@angular/core';


@Injectable()
export class DataService implements OnInit {

    months: Date[] = [];

    events: EventOfDay[] = [
        new EventOfDay("qqqq", new Date(2015, 3, 10), 5),
        new EventOfDay("wwww", new Date(2015, 3, 5), 5),
        new EventOfDay("eeee", new Date(2015, 3, 13), 5),
        new EventOfDay("rrrr", new Date(2015, 3, 7), 5),
        new EventOfDay("tttt", new Date(2015, 3, 9), 5),
        new EventOfDay("yyyy", new Date(2015, 3, 1), 5),
        new EventOfDay("uuuu", new Date(2015, 3, 8), 5),
        new EventOfDay("iiii", new Date(2015, 5, 12), 5)
    ];

    constructor(){
        this.prepareMonth();
    }

    ngOnInit(){
        
    }

    getServiceData() {
        return this.events;
    }
    
    getAviableMonth() {
        return this.months;
    }

    findItem(search: Date) {
        for (let i = 0; i < this.events.length; i++) {
            let ttt = this.events[i];
            if ((+ttt.Date) == (+search)) {
                return this.events[i];
            }
        }
        return null;
    }

    addItem() {
        this.events.push(new EventOfDay("mmmmm", new Date(2015, 3, 23), 5));
        this.prepareMonth();
    }

    private prepareMonth(){
        for (let i = 0; i < this.events.length; i++) {
            let temp = new Date(this.events[i].Date.getFullYear(), this.events[i].Date.getMonth());
            let is = false;

            for (let j = 0; j < this.months.length; j++) {
                if (+temp == +this.months[j]) {
                    is = true;
                }
            }

            if (!is) {
                this.months.push(temp);
            }

        }
    }
}
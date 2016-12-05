import { EventOfDay } from './../Models/eventOfDay';
import { Injectable } from '@angular/core';


@Injectable()
export class DataService {
    events: EventOfDay[]= [
            new EventOfDay("qqqq", new Date(2015, 3,  10), 5),
            new EventOfDay("wwww", new Date(2015, 3,  5), 5),
            new EventOfDay("eeee", new Date(2015, 3, 13), 5),
            new EventOfDay("rrrr", new Date(2015, 3,  7), 5),
            new EventOfDay("tttt", new Date(2015, 3,  9), 5),
            new EventOfDay("yyyy", new Date(2015, 3,  1), 5),
            new EventOfDay("uuuu", new Date(2015, 3, 8), 5),
            new EventOfDay("iiii", new Date(2015, 3, 12), 5)
        ];

    getServiceData() {
        return this.events;
    }

    findItem(search: Date) {
        for(let i=0; i < this.events.length; i++){
            let ttt = this.events[i];
            if((+ttt.Date) == (+search)) {
                return this.events[i];
            }
        }
        return null;
    }
}
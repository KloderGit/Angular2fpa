import { Day } from './day.month.model';

export class Week{

    days: Day[] = [];

    addDay(day: Day){
        this.days.push(day);
    }

}
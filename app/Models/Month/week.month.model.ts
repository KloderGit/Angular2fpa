import { DayCalendar } from './day.month.model';

export class WeekCalendar{

    days: DayCalendar[] = [];

    addDay(day: DayCalendar){
        this.days.push(day);
    }

}
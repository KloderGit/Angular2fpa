import { calendarDay } from './day.month.model';

export class WeekCalendar{

    days: calendarDay[] = [];

    addDay(day: calendarDay){
        this.days.push(day);
    }

}
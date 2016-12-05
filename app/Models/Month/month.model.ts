import { DayCalendar } from './day.month.model';
import { WeekCalendar } from './week.month.model';

export class MonthCalendar {

    year: number;
    month: number;
    countDays: number;

    weeks: WeekCalendar[];

    constructor(date: Date) {
        this.weeks = new Array();

        this.year = date.getFullYear();
        this.month = date.getMonth();
        this.countDays = 32 - new Date(this.year, this.month, 32).getDate();

        this.createMonth( new Date( this.year, this.month) );
    }

    createMonth(date: Date) {

        let countTableCells: number = Math.ceil((this.countDays + this.getDay(date)) / 7) * 7;
        let countTableRows: number = countTableCells / 7;
        
        let cellIndex = 1;
        let dayIndex: number = 1;

        let offsetWeekDay = this.getDay(date) + 1;

        for (let weekNumber = 0; weekNumber < countTableRows; weekNumber++) {

            let currentWeek: WeekCalendar = new WeekCalendar();

            for (let dayWeekNumber = 0; dayWeekNumber < 7; dayWeekNumber++) {

                let currentDay: DayCalendar;

                if (cellIndex < offsetWeekDay || cellIndex > ( this.countDays + offsetWeekDay - 1)) {
                    currentDay = new DayCalendar();
                    currentDay.inMonth = false;
                    
                    let diff = offsetWeekDay - cellIndex;
                    let oldDate = new Date(this.year, this.month, 1);
                    oldDate.setDate(date.getDate() - diff);                     
                    currentDay.dateCalendar = oldDate;
                } else {
                    currentDay = new DayCalendar();
                    currentDay.inMonth = true;
                    let curDate = new Date(this.year, this.month, 1);
                    curDate.setDate(date.getDate() + (dayIndex -1));
                    currentDay.dateCalendar = curDate;
                    dayIndex++;
                }

                currentWeek.addDay(currentDay);

                cellIndex++;
            }

            this.weeks.push(currentWeek);
        }

    }

    getDay(date) { // получить номер дня недели, от 0(пн) до 6(вс)
        var day = date.getDay();
        if (day == 0) day = 7;
        return day - 1;
    }
}
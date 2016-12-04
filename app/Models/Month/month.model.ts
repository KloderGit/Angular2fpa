import { Day } from './day.month.model';
import { Week } from './week.month.model';

export class Month {

    year: number;
    month: number;
    countDays: number;

    weeks: Week[];

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

            let currentWeek: Week = new Week();

            for (let dayWeekNumber = 0; dayWeekNumber < 7; dayWeekNumber++) {

                let currentDay: Day;

                if (cellIndex < offsetWeekDay || cellIndex > ( this.countDays + offsetWeekDay - 1)) {
                    currentDay = new Day();
                    currentDay.inMonth = false;

                            // debugger;
                    
                    let diff = offsetWeekDay - cellIndex;
                    let oldDate = new Date(this.year, this.month, 1);
                    oldDate.setDate(date.getDate() - diff);                     
                    currentDay.number = oldDate.getDate();
                } else {
                    currentDay = new Day();
                    currentDay.inMonth = true;
                    currentDay.number = dayIndex;
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
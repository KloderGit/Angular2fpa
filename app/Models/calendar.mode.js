"use strict";
var CalendarGrid = (function () {
    function CalendarGrid(date) {
        this.weeks = [];
        this.year = date.getFullYear();
        this.month = date.getMonth();
        this.countDays = 32 - new Date(this.year, this.month, 32).getDate();
        this.createGrid(new Date(this.year, this.month));
    }
    CalendarGrid.prototype.createGrid = function (date) {
        var countTableCells = Math.ceil((this.countDays + this.getDay(date)) / 7) * 7;
        var countTableRows = countTableCells / 7;
        var cellIndex = 1;
        var dayIndex = 1;
        var offsetWeekDay = this.getDay(date) + 1;
        for (var weekNumber = 0; weekNumber < countTableRows; weekNumber++) {
            var currentWeek = new cWeek();
            for (var dayWeekNumber = 0; dayWeekNumber < 7; dayWeekNumber++) {
                var currentDay = new Date();
                if (cellIndex < offsetWeekDay || cellIndex > (this.countDays + offsetWeekDay - 1)) {
                    currentDay = new cDay();
                    currentDay.inmonth = false;
                    var diff = offsetWeekDay - cellIndex;
                    var oldDate = new Date(this.year, this.month, 1);
                    oldDate.setDate(date.getDate() - diff);
                    currentDay.date = oldDate;
                }
                else {
                    currentDay = new cDay();
                    currentDay.inmonth = true;
                    var curDate = new Date(this.year, this.month, 1);
                    curDate.setDate(date.getDate() + (dayIndex - 1));
                    currentDay.date = curDate;
                    dayIndex++;
                }
                currentWeek.days.push(currentDay);
                cellIndex++;
            }
            this.weeks.push(currentWeek);
        }
    };
    CalendarGrid.prototype.getDay = function (date) {
        var day = date.getDay();
        if (day == 0)
            day = 7;
        return day - 1;
    };
    return CalendarGrid;
}());
exports.CalendarGrid = CalendarGrid;
var cWeek = (function () {
    function cWeek() {
        this.days = [];
    }
    return cWeek;
}());
var cDay = (function () {
    function cDay() {
    }
    return cDay;
}());
//# sourceMappingURL=calendar.mode.js.map
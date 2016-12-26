import { DataManager } from './../Data/DataManager';
import { CalendarGrid } from './../Models/calendar.mode';
import { Event } from './../Models/event.model';
import { Component, Input, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'month',
    styleUrls: ['./../Views/css/month.css'],
    templateUrl: './../Views/month.html' 
})
export class MonthComponent implements OnInit{
    @Input() events: Event[];

    grid: CalendarGrid;
    disciplineId: string;

    constructor(private dataManager: DataManager){}

    ngOnInit(){
        this.grid = new CalendarGrid( this.events[0].date ); 
        this.disciplineId = this.events[0].disciplineId;
    } 

    getMonthName(){
        return this.events[0].date.toLocaleString("ru-ru", { month: "long" }) + " " + this.events[0].date.getFullYear();
    }   

    addEvent(day){
        this.dataManager.addEvent( new Event(this.guid(), day.date, this.disciplineId ) )
            .then( res => 
            {
                if ( res == true ){
                    console.log("Успешно");
                } else {
                    console.log("Провал");
                }
            }

        );
    }

    guid() {
        return this._p8() + this._p8(true) + this._p8(true) + this._p8();
    }
    
    _p8(s?) {
            var p = (Math.random().toString(16)+"000000000").substr(2,8);
            return s ? "-" + p.substr(0,4) + "-" + p.substr(4,4) : p ;
    }
}
import { Router } from '@angular/router';
import { DataManager } from './../Data/DataManager';
import { CalendarGrid } from './../Models/calendar.mode';
import { ControlRegister } from './../Models/control-register.model';
import { Component, Input, OnInit } from '@angular/core';

import { Guid } from './../Models/functions';

@Component({
    moduleId: module.id,
    selector: 'month',
    styleUrls: ['./../Views/css/month.css'],
    templateUrl: './../Views/month.html' 
})
export class MonthComponent implements OnInit{
    @Input() events: ControlRegister[];

    grid: CalendarGrid;
    disciplineId: string;

    constructor(private dataManager: DataManager, private router: Router){}

    ngOnInit(){
        this.grid = new CalendarGrid( this.events[0].date ); 
        this.disciplineId = this.events[0].disciplineId;
    } 

    getMonthName(){
        return this.events[0].date.toLocaleString("ru-ru", { month: "long" }) + " " + this.events[0].date.getFullYear();
    }   

    addEvent(day){
        this.dataManager.addEvent( new ControlRegister(Guid(), day.date, this.disciplineId ) )
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

    selectDay(day){
        this.router.navigate(['/register-list', + day.date ]);
    }
    
}
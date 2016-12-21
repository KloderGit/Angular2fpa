import { discipline } from './../Data/discipline.mock.model';
import { Teacher } from './../Models/teacher.mode';
import { Discipline } from './../Models/discipline.model';
import { events } from './../Data/events.mock.data';
import { Event } from './../Models/event.model';
import { Component, OnInit, AfterViewInit } from '@angular/core';
import { teachers } from './../Data/teachers.mock.data';

@Component({
    selector: 'shedule',
    styleUrls: ['app/Views/css/shedule.css'],
    templateUrl: 'app/Views/shedule.html'
})

export class SheduleComponent implements OnInit, AfterViewInit{
    events: Event[];
    teachers: Teacher[];
    disciplines: Discipline[];

    selectedTeacher: Teacher;
    selectedDiscipline: Discipline;

    constructor(){
        this.events = []; 
        this.teachers = [];
        this.disciplines = [];
    }

    ngOnInit(){
        this.events = events;
        this.teachers = teachers;
        this.disciplines = discipline;
    }

    ngAfterViewInit() {
    }

    isActive(item: Discipline){
        return item == this.selectedDiscipline;
    }

    changeTeacher(teacher: Teacher){
        this.selectedTeacher = teacher;
        this.selectedDiscipline = this.findDiscipline(this.selectedTeacher);
    }

    changeDiscipline(discipline: Discipline){
        this.selectedDiscipline = discipline;
    }

    findDiscipline(teacher: Teacher){
        let result: Discipline;

        for( let i=0; i<this.disciplines.length; i++){
            let tmp = this.disciplines[i];
            if ( tmp.teacherId == teacher.id ){
                return this.disciplines[i];
            }
        }

    }
}
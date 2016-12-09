import { discipline } from './../Data/discipline.mock.model';
import { Teacher } from './../Models/teacher.mode';
import { Discipline } from './../Models/discipline.model';
import { events } from './../Data/events.mock.data';
import { Event } from './../Models/event.model';
import { Component, OnInit } from '@angular/core';
import { teachers } from './../Data/teachers.mock.data';

@Component({
    selector: 'shedule',
    styleUrls: ['app/Views/css/shedule.css'],
    template: `
        <div *ngFor = "let teacher of teachers; let tchrIndx = index">
            <input name="tchr" type="radio" [value] = "teacher" (change) = "changeTeacher(tchrIndx)">
            <teacher [teacher] = "teacher" ></teacher>
        </div>

        <div *ngFor = "let discipline of disciplines | discp: selectedTeacher">
            <input name="disc" type="radio" (change) = "changeDiscipline(discipline)">
            {{discipline.title}}
        </div>

        <discipline [events] = "events | oneDiscipln: selectedDiscipline" [discipline] = "selectedDiscipline"></discipline>
    `
    // templateUrl: 'app/Views/shedule.html'
})

export class SheduleComponent implements OnInit{
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

        this.selectedTeacher = this.teachers[0];
        this.selectedDiscipline = this.disciplines[0];
    }

    changeTeacher(index: number){
        this.selectedTeacher = this.teachers[index];
        console.log(this.selectedTeacher);
    }

    changeDiscipline(discipline: Discipline){
        this.selectedDiscipline = discipline;
        console.log(this.selectedDiscipline);
    }
}
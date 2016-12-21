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
    template: `
        <div id="teacher_list">
            <div *ngFor = "let teacher of teachers; let tchrIndx = index" >
                <input name="tchr" type="radio" (change) = "changeTeacher(teacher)" class = "teacher_item">
                <teacher [teacher] = "teacher" ></teacher>
            </div>
        </div>

        <div *ngIf = "selectedTeacher != null" id="teacher_disciplines">
            <div *ngFor = "let discipline of disciplines | discp: selectedTeacher" class="teacher_discipline_item">
                <input name="disc" type="radio" (change) = "changeDiscipline(discipline);">
                {{discipline.title}}
            </div>
        </div>

        <h2 *ngIf = "selectedDiscipline != null">{{selectedDiscipline.title}}</h2>

        <discipline *ngIf = "selectedDiscipline != null" 
                    [events] = "events | oneDiscipln: selectedDiscipline" >
        </discipline>
    `
    // templateUrl: 'app/Views/shedule.html'
})

export class SheduleComponent implements OnInit, AfterViewInit{
    events: Event[];
    teachers: Teacher[];
    disciplines: Discipline[];

    selectedTeacher: Teacher;
    selectedDiscipline: Discipline;

    selectedTeacherHTML: HTMLElement;

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
        this.selectedTeacherHTML = document.getElementById('teacher_list'); 
        console.log(this.selectedTeacherHTML);

        // let mmm = this.selectedTeacherHTML.getElementsByClassName('teacher_item')[0];

        // if (mmm.checked == false)
        // {
        // mmm.click();

        // }
    }

    changeTeacher(teacher: Teacher){
        this.selectedTeacher = teacher;
        this.selectedDiscipline = this.findDiscipline(this.selectedTeacher);

        // let teacher_disciplines_HTMLElement = document.getElementById('teacher_disciplines');
        // let teacher_discipline_item_HTMLElement = teacher_disciplines_HTMLElement.getElementsByClassName('teacher_discipline_item')[0];
        //         console.log(teacher_discipline_item_HTMLElement);

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
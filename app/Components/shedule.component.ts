import { DataManager } from './../Data/DataManager';
import { discipline } from './../Data/discipline.mock.model';
import { Teacher } from './../Models/teacher.mode';
import { Discipline } from './../Models/discipline.model';
import { events } from './../Data/events.mock.data';
import { Event } from './../Models/event.model';
import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
    selector: 'shedule',
    styleUrls: ['app/Views/css/shedule.css'],
    templateUrl: 'app/Views/shedule.html'
})

export class SheduleComponent implements OnInit, AfterViewInit{
    events: Event[] = [];
    teachers: Teacher[];
    disciplines: Discipline[] = [];

    selectedTeacher: Teacher;

    selectedDiscipline: Discipline;

    constructor(private dataManager: DataManager){}

    ngOnInit(){
        this.events = events;
        this.dataManager.getTeachers().then( data => 
                            { 
                                this.teachers = data;
                                this.selectedTeacher = this.teachers[0]; 
                                this.selectedDiscipline = this.findDiscipline(this.selectedTeacher);
                            } );

        this.disciplines = discipline;
    }

    ngAfterViewInit() {
        // setTimeout(this.teacherSelect, 0);
        // this.selectedTeacher = teachersData[0];
                
    }

    addTeacher(){
        this.teachers.push( new Teacher("tch4","Макарова"));
    }

    teacherSelect(){
        this.selectedTeacher = this.teachers[0];
        this.selectedDiscipline = this.findDiscipline(this.selectedTeacher);
    }

    changeTeacher(teacher: Teacher){
        this.selectedTeacher = teacher;
        this.selectedDiscipline = this.findDiscipline(this.selectedTeacher);
    }

    changeDiscipline(discipline: Discipline){
        this.selectedDiscipline = discipline;
    }

    findDiscipline(teacher: Teacher){
        for( let i=0; i<this.disciplines.length; i++){
            let tmp = this.disciplines[i];
            if ( tmp.teacherId == teacher.id ){
                return this.disciplines[i];
            }
        }
    }

    applyChanges(work: ()=>void) {
        setTimeout(work, 2000);
    }
}
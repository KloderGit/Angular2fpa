import { DataManager } from './../Data/DataManager';
import { discipline } from './../Data/discipline.mock.model';
import { Teacher } from './../Models/teacher.mode';
import { Discipline } from './../Models/discipline.model';
import { events } from './../Data/events.mock.data';
import { Event } from './../Models/event.model';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'shedule',
    styleUrls: ['app/Views/css/shedule.css'],
    templateUrl: 'app/Views/shedule.html'
})

export class SheduleComponent implements OnInit {
    events: Event[];
    teachers: Teacher[];
    disciplines: Discipline[];

    selectedTeacher: Teacher;
    selectedDiscipline: Discipline;

    constructor(private dataManager: DataManager) {}

    ngOnInit() {
        this.dataManager.getTeachers()
            .then(data => {
                this.teachers = data;
                this.selectedTeacher = this.teachers[0];
        });

        this.dataManager.getDiscipline()
            .then(data => {
                this.disciplines = data;
                this.selectedDiscipline = this.findDiscipline(this.selectedTeacher);
        });

        this.dataManager.getEvents()
            .then(data => {
                this.events = data;
        });
    }

    addTeacher() {
        this.dataManager.addTeacher(new Teacher("tch4","Макарова"))
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

    teacherSelect() {
        this.selectedTeacher = this.teachers[0];
        this.selectedDiscipline = this.findDiscipline(this.selectedTeacher);
    }

    changeTeacher(teacher: Teacher) {
        this.selectedTeacher = teacher;
        this.selectedDiscipline = this.findDiscipline(this.selectedTeacher);
    }

    changeDiscipline(discipline: Discipline) {
        this.selectedDiscipline = discipline;
    }

    findDiscipline(teacher: Teacher) {
        if (teacher == null) { return; }
        for (let i = 0; i < this.disciplines.length; i++) {
            let tmp = this.disciplines[i];
            if (tmp.teacherId == teacher.id) {
                return this.disciplines[i];
            }
        }
    }


    selectTeacherAndDiscipline(idTeacher: string, idDiscipline: string){
        this.selectedTeacher = this.findTeacherById(idTeacher);
        this.selectedDiscipline = this.findDisciplineById(idDiscipline);
    }

    findTeacherById(id:string){
        let index = this.teachers.map(x => x.id).indexOf(id);
        return this.teachers[index];
    }

    findDisciplineById(id:string){
        let index = this.disciplines.map(x => x.id).indexOf(id);
        return this.disciplines[index];
    }

}
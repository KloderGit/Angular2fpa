import { ControlRegister } from './../Models/control-register.model';
import { Discipline } from './../Models/discipline.model';
import { Teacher } from './../Models/teacher.mode';
import { Injectable, OnInit } from '@angular/core';
import { MockDataServices } from './../Services/MockDataService';

@Injectable()
export class DataManager{

    public teachers: Promise<Teacher[]>; 
    public discipline: Promise<Discipline[]>;
    public events: Promise<ControlRegister[]>;

    private service: MockDataServices;

    constructor()    
    { 
        console.log("Создание DataManager");
        this.service = new MockDataServices();
        this.Init();
    }

    Init(){
        console.log("Инициализация DataManager");

        this.teachers = new Promise((resolve, reject) => {
            resolve(this.service.getTeachers());
        });

        this.discipline = new Promise((resolve, reject) => {
            resolve(this.service.getDiscipline());
        });

        this.events = new Promise((resolve, reject) => {
            resolve(this.service.getEvents());
        });
    }

    getTeachers(){
        return this.teachers;
    }

    getDiscipline(){
        return this.discipline;
    }

    getEvents(){
        return this.events;
    }

    getEventsByDate(date: Date){
        return this.events.then(
            (eve) => {   
                return eve.filter(
                    (e) => { return +e.date == +date; }
                );
            }
        );
    }

    addTeacher(teacher: Teacher){

        let addTeacherQuery = new Promise((resolve, reject) => {
            if (this.service.addTeacher(teacher)){
                resolve();
            } else {
                reject();
            }            
        });

        return addTeacherQuery.then( () => 
            {
                this.teachers.then( teachers => teachers.push(teacher) ); 
                console.log("Преподаватель успешно добавлен в DataManager");
                return true;
            },
            () => 
            {
                console.log("Преподаватель не добавлен. Сервис вернул ошибку");
                return false;
            }
            );
    }

    addEvent(event: ControlRegister){
        let addEventQuery = new Promise((resolve, reject) =>
        {
            if ( this.service.addEvent(event) ){
                resolve();
            } else {
                reject();
            }  
        });

        return addEventQuery.then( () => 
            {
                this.events.then( events => events.push(event) ); 
                console.log("Ведомость успешно добавлена в DataManager");
                return true;
            },
            () => 
            {
                console.log("Ведомость не добавлена. Сервис вернул ошибку");
                return false;
            }
            );
    }
}
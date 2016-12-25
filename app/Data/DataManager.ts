import { Event } from './../Models/event.model';
import { Discipline } from './../Models/discipline.model';
import { Teacher } from './../Models/teacher.mode';
import { Injectable, OnInit } from '@angular/core';
import { MockDataServices } from './../Services/MockDataService';

@Injectable()
export class DataManager{

    public teachers: Promise<Teacher[]>; 
    public discipline: Promise<Discipline[]>;
    public events: Promise<Event[]>;

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
}
import { Teacher } from './../Models/teacher.mode';
import { Injectable } from '@angular/core';
import { MockDataServices } from './../Services/MockDataService';

@Injectable()
export class DataManager{

    public teachers: Teacher[];


    private service: MockDataServices;

    constructor()    
    { 
        this.service = new MockDataServices();
    }

    ngOnInit(){}

    getTeachers(){
        return Promise.resolve( this.service.getTeachers() );
    }

    addTeacher(teacher: Teacher){
        this.service.addTeacher(teacher);
    }
}
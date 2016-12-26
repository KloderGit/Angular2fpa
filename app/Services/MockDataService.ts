import { Event } from './../Models/event.model';
import { events } from './../Data/events.mock.data';
import { discipline } from './../Data/discipline.mock.model';
import { Teacher } from './../Models/teacher.mode';
import { teachersData } from './../Data/teachers.mock.data';

export class MockDataServices{

    constructor(){
        console.log("Создание Service");
    }
    getTeachers(){
        return teachersData;
    }

    getDiscipline(){
        return discipline;
    }

    getEvents(){
        return events;
    }

    addTeacher(teacher: Teacher): boolean{
        // teachersData.push(teacher);
        return true;
    }

    addEvent(event: Event): boolean{
        return true;
    }
}
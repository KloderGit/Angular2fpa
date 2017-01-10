import { Discipline } from './discipline.model';

export class ControlRegister{

    id: string;
    date: Date;
    disciplineId: string;
    
    constructor ( id: string, date: Date, disciplineId: string){
        this.id = id;
        this.date = date;
        this.disciplineId = disciplineId;
    }
}
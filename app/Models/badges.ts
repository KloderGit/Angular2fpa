import { IEducationType } from './IEducationType';
import { Group } from './group';
import { Discipline } from './discipline';
import { Program } from './program';
import { Teacher } from './teacher';

export class Badgets{
    Teacher: Teacher;
    Program: Program;
    Discipline: Discipline;
    Group: Group;
    EducationType: IEducationType;    
}
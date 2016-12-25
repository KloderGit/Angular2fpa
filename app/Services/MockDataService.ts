import { Teacher } from './../Models/teacher.mode';
import { teachersData } from './../Data/teachers.mock.data';

export class MockDataServices{

    getTeachers(){
        return teachersData;
    }

    addTeacher(teacher: Teacher){
        teachersData.push(teacher);
    }
}
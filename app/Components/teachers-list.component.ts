import { ControlRegister } from './../Models/control-register.model';
import { teachers } from './../Data/teachers.mock.data';
import { Component, Input } from '@angular/core';
import { Teacher } from './../Models/teacher.mode';

@Component({
    selector: 'teachers-list',
    template: `
        <div *ngFor = "let teacher of teachers">
            <teacher [teacher] = teacher ></teacher>
        </div>

        <p *ngFor = "let teacher of teachers">
            <input name="dzen" type="radio">
            <teacher [teacher] = teacher ></teacher>
        </p>
    `
})
export class TeacherListComponent {    
    @Input() teachers: Teacher[];
}
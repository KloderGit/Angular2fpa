import { Component, Input } from '@angular/core';
import { Teacher } from './../Models/teacher.mode';

@Component({
    selector: 'teacher',
    template: `
        <div>
            <p>
                {{teacher.name}}
            </p>
        </div>
    `
})
export class TeacherComponent{
    selected: boolean;
    @Input() teacher: Teacher;    
}
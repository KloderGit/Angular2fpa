import { Teacher } from './../Models/teacher.mode';
import { Discipline } from './../Models/discipline.model';


import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
    name: 'discp',
    pure: false
})

export class DisciplinePipe implements PipeTransform {
  transform(array: Discipline[], teacher: Teacher) {
      return array.filter( function(item){
          return item.teacherId == teacher.id;
      });
  }
}
import { Discipline } from './../Models/discipline.model';
import { ControlRegister } from './../Models/control-register.model';

import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
    name: 'oneDiscipln',
    pure: false
})
export class OneDisciplinePipe implements PipeTransform {
  transform(array: ControlRegister[], discipline: Discipline) {
    return array.filter( function(item){
      return item.disciplineId == discipline.id;
    });
  }
}
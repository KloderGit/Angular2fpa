import { Discipline } from './../Models/discipline.model';
import { Event } from './../Models/event.model';

import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
    name: 'oneDiscipln',
    pure: false
})
export class OneDisciplinePipe implements PipeTransform {
  transform(array: Event[], discipline: Discipline) {
    return array.filter( function(item){
      return item.disciplineId == discipline.id;
    });
  }
}
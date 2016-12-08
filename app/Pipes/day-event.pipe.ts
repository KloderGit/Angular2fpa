import { Event } from './../Models/event.model';

import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
    name: 'event',
    pure: false
})
export class DayEventPipe implements PipeTransform {
  transform(array: Event[], date: Date) {
    for( let i = 0; i < array.length; i++ ){

        let indexDate = array[i].date;
        let findDate = date;
        if( +indexDate == +findDate ){
            return array[i];
        } 
    }
  }
}
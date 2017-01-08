import { Event } from './../Models/event.model';

import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
    name: 'event',
    pure: false
})
export class DayEventPipe implements PipeTransform {
  transform(array: Event[], date: Date) {
    return array.filter( function(item){
      return +item.date == +date;
    });
  }
}

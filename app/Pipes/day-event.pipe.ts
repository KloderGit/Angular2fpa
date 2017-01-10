import { ControlRegister } from './../Models/control-register.model';

import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
    name: 'event',
    pure: false
})
export class DayEventPipe implements PipeTransform {
  transform(array: ControlRegister[], date: Date) {
    return array.filter( function(item){
      return +item.date == +date;
    });
  }
}

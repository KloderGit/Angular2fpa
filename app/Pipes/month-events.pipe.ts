import { Event } from './../Models/event.model';
import { Pipe, PipeTransform } from '@angular/core';
 
@Pipe({
    name: 'month',
    pure: false
})
export class MonthEventsPipe implements PipeTransform {
  transform(array: Event[]) {
      let monthArray: any[] = [];
      let result = [];

      for( let i = 0; i < array.length; i++){
            let currenDate = new Date(array[i].date.getFullYear(), array[i].date.getMonth());
            if ( monthArray.indexOf(+currenDate) == -1 ){
                monthArray.push(+currenDate);
            }
      }

      for( let i = 0; i < monthArray.length; i++){
          let findDate = monthArray[i];
          let tempArray = [];
          for( let j = 0; j < array.length; j++){
            let currenDate = new Date(array[j].date.getFullYear(), array[j].date.getMonth());

            if ( +findDate == +currenDate ){
               tempArray.push(array[j]);
            }
        }
        result.push(tempArray);
      }

      return result;
  }
}
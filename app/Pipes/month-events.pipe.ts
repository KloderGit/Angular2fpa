import {
    ControlRegister
} from './../Models/control-register.model';
import {
    Pipe,
    PipeTransform
} from '@angular/core';

@Pipe({
    name: 'month',
    pure: false
})
export class MonthEventsPipe implements PipeTransform {
    transform(array: ControlRegister[]) {
        let monthArray: any[] = [];
        let result = [];

        for (let i = 0; i < array.length; i++) {
            let currenDate = new Date(array[i].date.getFullYear(), array[i].date.getMonth());
            if (monthArray.indexOf(+currenDate) == -1) {
                monthArray.push(+currenDate);
            }
        }

        monthArray.sort();

        for (let i = 0; i < monthArray.length; i++) {
            result[i] = array.filter( function(item){
                let currenDate = new Date(item.date.getFullYear(), item.date.getMonth());
                return +currenDate == +monthArray[i];
            });
        }

        return result;
    }
}
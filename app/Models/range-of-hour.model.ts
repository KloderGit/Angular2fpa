import { MinuteOfHour } from './minute-of-hour.model';
import { Guid } from './../Models/functions';

export class RangeOfHour{
    id: string;
    startTime: Date;

    isSelected: true;

    hour: number;
    minute: number;
    width: number;

    arrayMinutes: MinuteOfHour[] = [];

    constructor( startTime: Date, length: number ){
        this.id = Guid();
        this.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDay(), startTime.getHours(), startTime.getMinutes() );
        
        this.hour = startTime.getHours();
        this.minute = startTime.getMinutes();

        this.width = length;
    }
}
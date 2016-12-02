// Описание ведомости

import { MetaData } from './metadata';

export class Event{
    Id: string;
    Date: Date;
    Selected: boolean;
    RateType: any;

    Params: MetaData;

    constructor (id: string, date: Date, selected: boolean, RateType: any, metadata: MetaData){
        this.Id = id;
        this.Date = date;
        this.Selected = selected;
        this.Params = metadata;
    }
}
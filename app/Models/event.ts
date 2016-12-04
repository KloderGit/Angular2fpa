// Описание ведомости

export class Event{
    Id: string;
    Date: Date;
    Selected: boolean;
    RateType: any;

    constructor (id: string, date: Date, selected: boolean, RateType: any){
        this.Id = id;
        this.Date = date;
        this.Selected = selected;
        this.RateType = RateType; 
    }
}
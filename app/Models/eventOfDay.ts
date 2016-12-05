// Описание ведомости

export class EventOfDay{
    Id: string;
    Date: Date;
    RateType: any;

    constructor (id: string, date: Date, RateType: any){
        this.Id = id;
        this.Date = date;
        this.RateType = RateType; 
    }
}
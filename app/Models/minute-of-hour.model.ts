
export class MinuteOfHour{
    parentId: string;
    value: number;

    constructor( parent: string, value: number ){
        this.parentId = parent;
        this.value = value;
    }
}
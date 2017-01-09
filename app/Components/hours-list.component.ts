import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'hour-list',
    template: `

        <p>range_min - {{range_min}}</p>
        <p>range_max - {{range_max}}</p>

        <table *ngFor = "let row of rangeDivide()">
             <tr>
                <td>sss</td>
             </tr>
        </table>
    `
})
export class HoursList implements OnInit{
    @Input() range_min: number;
    @Input() range_max: number;

    constructor(){}

    ngOnInit(){
    }

    rangeDivide(){
        let rowCount = this.range_max - this.range_min;
        let result: number[] = [];
        for( let i=0; i < rowCount; i++){
            result.push(this.range_min + i);
        }

        return result;
    }
}
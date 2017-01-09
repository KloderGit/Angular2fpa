import { Component, OnInit, Output, EventEmitter } from '@angular/core';
declare var jQuery:any;


@Component({
    selector: 'range-time',
    template: `
        <div style="width: 600px; margin: 0 auto">
            <input type="hidden" class="range-slider" value="10,23" />
        </div>
    `
})

export class RangeSlider implements OnInit{
    
    @Output() rangeChanged = new EventEmitter<number[]>();

    constructor(){}

    ngOnInit(){
        this.widgetInit();       
    }



    widgetInit(){
        
        let emmiter = this.rangeChanged;

        jQuery('.range-slider').jRange({
            from: 7,
            to: 24,
            step: 1,
            scale: [7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24],
            format: '%s ч.',
            width: 600,
            showLabels: true,
            isRange : true,
            snap: true
        });

        jQuery('.range-slider').on('change', function(){
            hhh(this.value);
        });

        function hhh(value: string){
            let array = value.split(',');
            let res: number[] = [];
            res.push(parseInt(array[0]));
            res.push(parseInt(array[1]));
            emmiter.emit(res);            
        }
    }
}
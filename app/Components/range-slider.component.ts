import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
declare var jQuery:any;


@Component({
    selector: 'range-time-slider',
    template: `
        <div style="width: 600px; margin: 0 auto">
            <input type="hidden" class="range-slider" value="10,13" />
        </div>
    `
})

export class RangeSliderRange implements OnInit{
    
    @Output() sliderChanged = new EventEmitter<number[]>();
    @Input() min: number;
    @Input() max: number;
    @Input() step: number;
    @Input() snap: boolean;

    private labels: number[] = [];

    constructor(){}

    ngOnInit(){
        for( let i=this.min; i <= this.max; i++){
            this.labels.push(i);
        }
        this.widgetInit();
    }

    widgetInit(){
        
        let context = this;

        let emmiter = this.sliderChanged;

        jQuery('.range-slider').jRange({
            from: context.min,
            to: context.max,
            step: 0.01,
            scale: context.labels,
            format: '%s',
            width: 600,
            showLabels: true,
            isRange : true,
            snap: context.snap,
            onstatechange: initChange()
        });

        function initChange(){
            handleChange( jQuery('.range-slider')[0].value );
        }

        jQuery('.range-slider').on('change', function(){
            handleChange(this.value);
        });

        function handleChange(value: string){
            let array = value.split(',');
            let res: number[] = [];
            res.push(parseInt(array[0]));
            res.push(parseInt(array[1]));
            emmiter.emit(res);            
        }
    }
}
import { Component, Input, OnInit, Output, EventEmitter, ElementRef } from '@angular/core';
declare var jQuery:any;

@Component({
    moduleId: module.id,
    selector: 'range-slider',
    template: `
    <div class="container">
        <div class="row" *ngIf = "labels">
            <div class="col-md-4" style="text-align: left">{{min}}</div>
            <div class="col-md-4" style="text-align: center">
                Выбранно: <input type="text" value="{{value}}" (change) = "onCountChanged($event.target)" />
            </div>
            <div class="col-md-4" style="text-align: right">{{max}}</div>
        </div>
        <div class="row">
            <input class="range-slider" type="range" min="{{min}}" max="{{max}}" step="{{step}}" value="{{value}}"
                    (change) = "onChange($event.target)"/>
        </div>
    </div>                
    `,
    styleUrls: ['range-slider.css']
})
export class RangeSlider implements OnInit{
    @Input() min: number;
    @Input() max: number;
    @Input() step: number;
    @Input() labels: boolean;
    @Input() value: number;

    @Output() rangeSliderChanged = new EventEmitter<number>();

    ngOnInit(){
        if ( this.min == undefined ){ this.min = 1; }
        if ( this.max == undefined ){ this.max = 100; }
        if ( this.step == undefined ){ this.step = 1; }
        if ( this.value == undefined ){ this.value = 1; }
        if ( this.labels == undefined ){ this.labels = true; }

        this.rangeSliderChanged.emit( this.value );
    }

    onChange( element: HTMLInputElement ){
        this.value = parseInt( element.value );
        this.rangeSliderChanged.emit( this.value );        
    }

    onCountChanged(element: HTMLInputElement){
        this.value = parseInt( element.value );
        this.rangeSliderChanged.emit( this.value );
    }
}
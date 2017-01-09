import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'test',
    template: '<p>OOOOOOOOOOOOOOOO</p>'    
})
export class TestEmmit{
    @Output() ccc = new EventEmitter<any>()

    constructor(){
        let r = 'UUUUUUUUU';
        console.log(r);
        this.ccc.emit(r);
    }

}
import { DataService } from './../../Services/data.service';
import { Component } from '@angular/core';


@Component({
    selector: 'watch',
    template: `
        <ul>
            <li *ngFor = "let item of itemsArray">{{item.Id}}</li>
        </ul>
    `
})
export class WatchData{
       itemsArray = this.dataService.getServiceData();

       constructor(private dataService: DataService){ }
}
import { Item } from './../Models/Item';
import { Component } from '@angular/core';

@Component({
    selector: 'shedule',
    styleUrls: ['app/Views/css/shedule.css'],
    templateUrl: 'app/Views/shedule.html'
})

export class Shedule{
    items: Item[] =
    [
        { purchase: "Хлеб", done: false, price: 15.9 },
        { purchase: "Масло", done: false, price: 60 },
        { purchase: "Картофель", done: true, price: 22.6 },
        { purchase: "Сыр", done: false, price:310 }
    ];

    addItem(text: string, price: number): void {
        if ( text == null || text == undefined || text.trim() == "") {
            return;
        }

        if ( price == null || price == undefined) {
            return;
        }

        this.items.push(new Item(text, null, price));
    }
}
import { ListMonth } from './../Components/ListMonth/list.month.component';
import { WatchData } from './../Components/Watch/watch.component';
import { DataService } from './../Services/data.service';
import { DayComponent } from './../Components/Day/day.component';
import { MonthComponent } from './../Components/Month/month.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ MonthComponent, DayComponent, WatchData, ListMonth ],
    bootstrap: [ ListMonth ],
    providers: [ DataService ]
})

export class SheduleAppModule {}
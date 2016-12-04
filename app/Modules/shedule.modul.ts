import { DayComponent } from './../Components/Day/day.component';
import { MonthComponent } from './../Components/Month/month.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ MonthComponent, DayComponent ],
    bootstrap: [ MonthComponent ]
})

export class SheduleAppModule {}
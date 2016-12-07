import { Day } from './../Components/day.component';
import { Month } from './../Components/month.component';
import { Calendar } from './../Components/calendar.component';
import { FormsModule } from '@angular/forms';
import { Shedule } from './../Components/shedule.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ Shedule, Calendar, Month, Day ],
    bootstrap: [ Shedule ]
})

export class SheduleAppModule {}
import { AppComponent } from './../Components/app.component';
import { HoursList } from './../Components/hours-list.component';
import { AddEvent } from './../Components/addEvent.component';
import { RangeSlider } from './../Components/range-slider.component';
import { DataManager } from './../Data/DataManager';
import { MockDataServices } from './../Services/MockDataService';
import { OneDisciplinePipe } from './../Pipes/one-discipline.pipe';
import { DisciplinePipe } from './../Pipes/disciplines.pipe';
import { TeacherListComponent } from './../Components/teachers-list.component';
import { TeacherComponent } from './../Components/teachers.component';
import { DisciplineComponent } from './../Components/discipline.component';
import { MonthEventsPipe } from './../Pipes/month-events.pipe';
import { DayEventPipe } from './../Pipes/day-event.pipe';
import { DayComponent } from './../Components/day.component';
import { MonthComponent } from './../Components/month.component';
import { CalendarComponent } from './../Components/calendar.component';
import { FormsModule } from '@angular/forms';
import { SheduleComponent } from './../Components/shedule.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { RouterModule } from '@angular/router';

var routerMaps = RouterModule.forRoot([
    { path: 'calendar', component: SheduleComponent },
    { path: 'addEvent', component: AddEvent },
    { path: '', component: SheduleComponent },
    { path: '**', component: SheduleComponent }
]);

@NgModule({
    imports: [ BrowserModule, FormsModule, routerMaps ],
    declarations: [ AppComponent, SheduleComponent, CalendarComponent, MonthComponent, 
                    DayComponent, DayEventPipe, MonthEventsPipe, DisciplineComponent,
                    TeacherComponent, TeacherListComponent, DisciplinePipe, OneDisciplinePipe, RangeSlider, AddEvent, HoursList ],
    bootstrap: [ AppComponent ],
    providers: [ DataManager ]
})

export class SheduleAppModule {}
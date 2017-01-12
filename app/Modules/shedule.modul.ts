import { AddRegisterFormShared } from './../Components/Sheets/add-register-form-shared';
import { TimePicker } from './../Widgets/time-picker';
import { AddRegisterFormSimple } from './../Components/Sheets/add-register-form-simple';
import { ControlRegisterList } from './../Components/Sheets/control-register-list.component';
import { AppComponent } from './../Components/app.component';
import { HoursList } from './../Components/Sheets/hours-list.component';
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
    { path: 'addEvent/:data', component: AddEvent },
    { path: 'register-list/:data', component: ControlRegisterList },
    { path: 'addshared/:data', component: AddRegisterFormShared },
    { path: '', component: SheduleComponent },
    { path: '**', component: SheduleComponent }
]);

@NgModule({
    imports: [ BrowserModule, FormsModule, routerMaps ],
    declarations: [ AppComponent, SheduleComponent, CalendarComponent, MonthComponent, ControlRegisterList, TimePicker, AddRegisterFormShared,
                    DayComponent, DayEventPipe, MonthEventsPipe, DisciplineComponent,
                    TeacherComponent, TeacherListComponent, DisciplinePipe, OneDisciplinePipe, RangeSlider, AddEvent, HoursList ],
    bootstrap: [ AppComponent ],
    providers: [ DataManager ]
})

export class SheduleAppModule {}
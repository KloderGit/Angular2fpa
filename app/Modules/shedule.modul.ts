import { Discipline } from './../Components/Discipline/discipline.component';
import { ListMonth } from './../Components/ListMonth/list.month.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


@NgModule({
    imports: [ BrowserModule ],
    declarations: [ ListMonth, Discipline ],
    bootstrap: [ Discipline ]
})

export class SheduleAppModule {}
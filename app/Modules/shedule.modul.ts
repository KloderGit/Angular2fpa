import { FormsModule } from '@angular/forms';
import { Shedule } from './../Components/shedule.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

@NgModule({
    imports: [ BrowserModule, FormsModule ],
    declarations: [ Shedule ],
    bootstrap: [ Shedule ]
})

export class SheduleAppModule {}
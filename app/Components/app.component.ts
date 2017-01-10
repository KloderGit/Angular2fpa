import { Component } from '@angular/core';

@Component({
    selector: 'application',
    template: `
        <a routerLink="/calendar" >Calendar</a>
        <a routerLink="/addEvent" >Add</a>

        <br/><br/><br/>
        <router-outlet></router-outlet>
    `
})
export class AppComponent{}
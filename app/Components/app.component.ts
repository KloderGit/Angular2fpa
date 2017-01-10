import { Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'application',
    templateUrl: 'app.html'
})
export class AppComponent{

    constructor(private router: Router){
        
    }

    ddd:number = +(new Date(2015,3,18));

    dddd(){
        this.router.navigate(['/addEvent', +(new Date(2015,3,18)) ]);
    }
}
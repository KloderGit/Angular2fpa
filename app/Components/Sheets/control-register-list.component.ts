import { DataManager } from './../../Data/DataManager';
import { ControlRegister } from './../../Models/control-register.model';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'control-register-list',
    templateUrl: 'control-register-list.html',    
})

export class ControlRegisterList implements OnInit{
    dayDate: Date = new Date();
    sheets: ControlRegister[];

    constructor( private dataManager: DataManager, 
                 private route: ActivatedRoute,
                 private router: Router ){

        this.sheets = [];
    }

    ngOnInit(){
        let context = this;
        
        this.dayDate.setTime( this.route.snapshot.params['data'] );

        this.dataManager.getEventsByDate(this.dayDate).then(
            result => {
                if (result.length <= 1) { 
                    context.router.navigate(['/addEvent', +context.dayDate ]); 
                }
                this.sheets = result;
        });

    }

}
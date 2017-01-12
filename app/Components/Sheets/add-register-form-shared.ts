import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'add-register-form-shared',
    templateUrl: 'add-register-form-shared.html',
    styleUrls: ['add-register-form-shared.css']
})
export class AddRegisterFormShared implements OnInit{

    date: Date = new Date();
    
    startIsactive: boolean = false;
    endIsactive: boolean = false;

    startTime = new Date();
    endTime = new Date();

    constructor( private route: ActivatedRoute ){}

    ngOnInit(){
        let urlParam = this.route.snapshot.params['data'];
        this.date.setTime(urlParam);
        this.startTime.setTime(urlParam); 
        this.endTime.setTime(urlParam); 
    }

    changeStartTime(startTime: number[]){
        if (!isFinite(startTime[0]) || !isFinite(startTime[0]) ){
            this.endIsactive = false;
        } else {
            this.endTime.setHours( startTime[0], startTime[1] );
            this.endIsactive = true;
        }    
    }

    changeEndTime(endTime: number[]){
        if (!isFinite(endTime[0]) || !isFinite(endTime[0]) ){
            this.endIsactive = false;
        } else {
            this.endTime.setHours( endTime[0], endTime[1] );
            this.endIsactive = true;
        }
    }
}
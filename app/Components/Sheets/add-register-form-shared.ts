import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
declare var $:any;

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

    studentCount: number;

    constructor( private route: ActivatedRoute ){}

    ngOnInit(){
        let urlParam = this.route.snapshot.params['data'];

        this.init_wizard_form();

        this.date.setTime(urlParam);
        this.startTime.setTime(urlParam); 
        this.endTime.setTime(urlParam); 

        this.studentCount = 90;        
    }

    changeStartTime(startTime: number[]){
        if (!isFinite(startTime[0]) || !isFinite(startTime[0]) ){
            this.startIsactive = false;
        } else {
            this.startTime.setHours( startTime[0], startTime[1] );
            this.startIsactive = true;
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

    studensCountChange( count: number){
        this.studentCount = count;
    }

    isActive(){
        if ( this.startIsactive && this.endIsactive ){
            return true;
        } else {
            return false;
        }
    }

    getDateStringRu(){
        return this.date.getDay() + " " + this.date.toLocaleString("ru-ru", { month: "long" }) + " " + this.date.getFullYear();
    }  

    init_wizard_form(){
        $(document).ready(function () {
            //Initialize tooltips
            $('.nav-tabs > li a[title]').tooltip();
            
            //Wizard
            $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

                var $target = $(e.target);
            
                if ($target.parent().hasClass('disabled')) {
                    return false;
                }
            });

            $(".next-step").click(function (e) {

                var $active = $('.wizard .nav-tabs li.active');
                $active.next().removeClass('disabled');
                nextTab($active);

            });
            $(".prev-step").click(function (e) {

                var $active = $('.wizard .nav-tabs li.active');
                prevTab($active);

            });
        });

        function nextTab(elem) {
            $(elem).next().find('a[data-toggle="tab"]').click();
        }
        function prevTab(elem) {
            $(elem).prev().find('a[data-toggle="tab"]').click();
        }
    }
}
import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
    moduleId: module.id,
    selector: 'add-register-form-simple',
    templateUrl: 'add-register-form-simple.html',
    styleUrls: ['add-register-form-simple.css']
})
export class AddRegisterFormSimple implements OnInit{

    ngOnInit(){
        this.init_wizard_form();
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
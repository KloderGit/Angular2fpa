"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AddRegisterFormSimple = (function () {
    function AddRegisterFormSimple() {
    }
    AddRegisterFormSimple.prototype.ngOnInit = function () {
        this.init_wizard_form();
    };
    AddRegisterFormSimple.prototype.init_wizard_form = function () {
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
    };
    AddRegisterFormSimple = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add-register-form-simple',
            templateUrl: 'add-register-form-simple.html',
            styleUrls: ['add-register-form-simple.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AddRegisterFormSimple);
    return AddRegisterFormSimple;
}());
exports.AddRegisterFormSimple = AddRegisterFormSimple;
//# sourceMappingURL=add-register-form-simple.js.map
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
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var AddRegisterFormShared = (function () {
    function AddRegisterFormShared(route) {
        this.route = route;
        this.date = new Date();
        this.startIsactive = false;
        this.endIsactive = false;
        this.startTime = new Date();
        this.endTime = new Date();
    }
    AddRegisterFormShared.prototype.ngOnInit = function () {
        var urlParam = this.route.snapshot.params['data'];
        this.init_wizard_form();
        this.date.setTime(urlParam);
        this.startTime.setTime(urlParam);
        this.endTime.setTime(urlParam);
        this.studentCount = 90;
    };
    AddRegisterFormShared.prototype.changeStartTime = function (startTime) {
        if (!isFinite(startTime[0]) || !isFinite(startTime[0])) {
            this.startIsactive = false;
        }
        else {
            this.startTime.setHours(startTime[0], startTime[1]);
            this.startIsactive = true;
        }
    };
    AddRegisterFormShared.prototype.changeEndTime = function (endTime) {
        if (!isFinite(endTime[0]) || !isFinite(endTime[0])) {
            this.endIsactive = false;
        }
        else {
            this.endTime.setHours(endTime[0], endTime[1]);
            this.endIsactive = true;
        }
    };
    AddRegisterFormShared.prototype.studensCountChange = function (count) {
        this.studentCount = count;
    };
    AddRegisterFormShared.prototype.isActive = function () {
        if (this.startIsactive && this.endIsactive) {
            return true;
        }
        else {
            return false;
        }
    };
    AddRegisterFormShared.prototype.getDateStringRu = function () {
        return this.date.getDay() + " " + this.date.toLocaleString("ru-ru", { month: "long" }) + " " + this.date.getFullYear();
    };
    AddRegisterFormShared.prototype.init_wizard_form = function () {
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
    AddRegisterFormShared = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'add-register-form-shared',
            templateUrl: 'add-register-form-shared.html',
            styleUrls: ['add-register-form-shared.css']
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], AddRegisterFormShared);
    return AddRegisterFormShared;
}());
exports.AddRegisterFormShared = AddRegisterFormShared;
//# sourceMappingURL=add-register-form-shared.js.map
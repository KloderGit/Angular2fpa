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
        this.date.setTime(urlParam);
        this.startTime.setTime(urlParam);
        this.endTime.setTime(urlParam);
    };
    AddRegisterFormShared.prototype.changeStartTime = function (startTime) {
        if (!isFinite(startTime[0]) || !isFinite(startTime[0])) {
            this.endIsactive = false;
        }
        else {
            this.endTime.setHours(startTime[0], startTime[1]);
            this.endIsactive = true;
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
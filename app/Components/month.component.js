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
var DataManager_1 = require('./../Data/DataManager');
var calendar_mode_1 = require('./../Models/calendar.mode');
var control_register_model_1 = require('./../Models/control-register.model');
var core_1 = require('@angular/core');
var functions_1 = require('./../Models/functions');
var MonthComponent = (function () {
    function MonthComponent(dataManager, router) {
        this.dataManager = dataManager;
        this.router = router;
    }
    MonthComponent.prototype.ngOnInit = function () {
        this.grid = new calendar_mode_1.CalendarGrid(this.events[0].date);
        this.disciplineId = this.events[0].disciplineId;
    };
    MonthComponent.prototype.getMonthName = function () {
        return this.events[0].date.toLocaleString("ru-ru", { month: "long" }) + " " + this.events[0].date.getFullYear();
    };
    MonthComponent.prototype.addEvent = function (day) {
        this.dataManager.addEvent(new control_register_model_1.ControlRegister(functions_1.Guid(), day.date, this.disciplineId))
            .then(function (res) {
            if (res == true) {
                console.log("Успешно");
            }
            else {
                console.log("Провал");
            }
        });
    };
    MonthComponent.prototype.selectDay = function (day) {
        this.router.navigate(['/register-list', +day.date]);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], MonthComponent.prototype, "events", void 0);
    MonthComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'month',
            styleUrls: ['./../Views/css/month.css'],
            templateUrl: './../Views/month.html'
        }), 
        __metadata('design:paramtypes', [DataManager_1.DataManager, router_1.Router])
    ], MonthComponent);
    return MonthComponent;
}());
exports.MonthComponent = MonthComponent;
//# sourceMappingURL=month.component.js.map
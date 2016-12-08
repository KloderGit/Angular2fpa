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
var calendar_mode_1 = require('./../Models/calendar.mode');
var core_1 = require('@angular/core');
var Month = (function () {
    function Month() {
    }
    Month.prototype.ngOnInit = function () {
        this.grid = new calendar_mode_1.CalendarGrid(this.events[0].date);
    };
    Month.prototype.getMonthName = function () {
        return this.events[0].date.toLocaleString("ru-ru", { month: "long" });
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], Month.prototype, "events", void 0);
    Month = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'month',
            styleUrls: ['./../Views/css/month.css'],
            templateUrl: './../Views/month.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Month);
    return Month;
}());
exports.Month = Month;
//# sourceMappingURL=month.component.js.map
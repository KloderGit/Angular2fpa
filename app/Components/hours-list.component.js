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
var HoursList = (function () {
    function HoursList() {
    }
    HoursList.prototype.ngOnInit = function () {
        this.hours = this.range_max_hour - this.range_min_hour;
        this.minutes = this.hours * 60;
    };
    HoursList.prototype.rangeDivide = function () {
        var rowCount = this.range_max_hour - this.range_min_hour;
        var result = [];
        for (var i = 0; i < rowCount; i++) {
            result.push(this.range_min_hour + i);
        }
        return result;
    };
    HoursList.prototype.hoursRange = function () {
        this.hours = this.range_max_hour - this.range_min_hour;
        this.minutes = this.hours * 60;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], HoursList.prototype, "range_min_hour", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], HoursList.prototype, "range_max_hour", void 0);
    HoursList = __decorate([
        core_1.Component({
            selector: 'hour-list',
            template: "\n\n        <p>range_min - {{range_min_hour}}</p>\n        <p>range_max - {{range_max_hour}}</p>\n        <p>\u0427\u0430\u0441\u043E\u0432 - {{hours}}</p>\n        <p>\u041C\u0438\u043D\u0443\u0442 - {{minutes}}</p>\n\n        <table *ngFor = \"let row of rangeDivide()\">\n             <tr>\n                <td>sss</td>\n             </tr>\n        </table>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], HoursList);
    return HoursList;
}());
exports.HoursList = HoursList;
//# sourceMappingURL=hours-list.component.js.map
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
    HoursList.prototype.ngOnInit = function () { };
    HoursList.prototype.rangeDivide = function () {
        var rowCount = this.range_max_hour - this.range_min_hour;
        var result = [];
        for (var i = 0; i < rowCount; i++) {
            result.push(this.range_min_hour + i);
        }
        return result;
    };
    HoursList.prototype.ddd = function () {
        console.log(this.prepare());
    };
    HoursList.prototype.prepare = function () {
        var objFull = {
            hours: []
        };
        var oststok;
        var _loop_1 = function(h) {
            var hour = [];
            if (oststok != undefined) {
                var obj = {
                    id: oststok.id,
                    min: oststok.minute,
                    width: oststok.width
                };
                hour.push(obj);
                oststok = undefined;
            }
            var array = this_1.rangesArray.filter(function (item) {
                return item.hour == h;
            });
            for (var i = 0; i < array.length; i++) {
                var currentRange = array[i];
                if (currentRange.width + currentRange.minute <= 60) {
                    var obj = {
                        id: currentRange.id,
                        min: currentRange.minute,
                        width: Math.floor(100 / (60 / currentRange.width))
                    };
                    hour.push(obj);
                    oststok = undefined;
                }
                if (currentRange.width + currentRange.minute > 60) {
                    var obj = {
                        id: currentRange.id,
                        min: currentRange.minute,
                        width: Math.floor(100 / (60 / (60 - currentRange.minute)))
                    };
                    hour.push(obj);
                    oststok = {
                        id: currentRange.id,
                        min: currentRange.minute,
                        width: Math.floor(100 / (60 / (currentRange.width - (60 - currentRange.minute))))
                    };
                }
            }
            objFull.hours.push(hour);
        };
        var this_1 = this;
        for (var h = this.range_min_hour; h < this.range_max_hour; h++) {
            _loop_1(h);
        }
        console.log(objFull);
        return objFull;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], HoursList.prototype, "range_min_hour", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], HoursList.prototype, "range_max_hour", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], HoursList.prototype, "rangesArray", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], HoursList.prototype, "minutesArray", void 0);
    HoursList = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'hour-list',
            templateUrl: 'hours-list.html',
            styleUrls: ['hours-list.css']
        }), 
        __metadata('design:paramtypes', [])
    ], HoursList);
    return HoursList;
}());
exports.HoursList = HoursList;
//# sourceMappingURL=hours-list.component.js.map
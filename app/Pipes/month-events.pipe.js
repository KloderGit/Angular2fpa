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
var MonthEventsPipe = (function () {
    function MonthEventsPipe() {
    }
    MonthEventsPipe.prototype.transform = function (array) {
        var monthArray = [];
        var result = [];
        for (var i = 0; i < array.length; i++) {
            var currenDate = new Date(array[i].date.getFullYear(), array[i].date.getMonth());
            if (monthArray.indexOf(+currenDate) == -1) {
                monthArray.push(+currenDate);
            }
        }
        monthArray.sort();
        for (var i = 0; i < monthArray.length; i++) {
            var findDate = monthArray[i];
            var tempArray = [];
            for (var j = 0; j < array.length; j++) {
                var currenDate = new Date(array[j].date.getFullYear(), array[j].date.getMonth());
                if (+findDate == +currenDate) {
                    tempArray.push(array[j]);
                }
            }
            result.push(tempArray);
        }
        return result;
    };
    MonthEventsPipe = __decorate([
        core_1.Pipe({
            name: 'month',
            pure: false
        }), 
        __metadata('design:paramtypes', [])
    ], MonthEventsPipe);
    return MonthEventsPipe;
}());
exports.MonthEventsPipe = MonthEventsPipe;
//# sourceMappingURL=month-events.pipe.js.map
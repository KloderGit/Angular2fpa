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
var range_of_hour_model_1 = require('./../Models/range-of-hour.model');
var router_1 = require('@angular/router');
var core_1 = require('@angular/core');
var AddEvent = (function () {
    function AddEvent(route) {
        this.route = route;
        this.dayDate = new Date();
        this.ranges = [];
        this.arrayMinutes = [];
    }
    AddEvent.prototype.ngOnInit = function () {
        this.dayDate.setTime(this.route.snapshot.params['data']);
    };
    AddEvent.prototype.ChangeLimits = function (range) {
        this.min_hour = range[0];
        this.max_hour = range[1];
        this.hoursCount = this.max_hour - this.min_hour;
        this.minutesCount = this.hoursCount * 60;
    };
    AddEvent.prototype.divideRange = function (vector) {
        this.ranges = [];
        this.arrayMinutes = [];
        var tempDate = this.dayDate;
        var minuteSum = 0;
        for (var i = 0; i < Math.floor(this.minutesCount / vector); i++) {
            tempDate.setHours(this.min_hour, minuteSum);
            var section = new range_of_hour_model_1.RangeOfHour(tempDate, vector);
            this.ranges.push(section);
            // let m = tempDate.getMinutes();
            // for( let j = m + 1; j < m + vector; j++){
            //     this.arrayMinutes.push( new MinuteOfHour(section.id, j) );
            // }
            minuteSum += vector;
        }
        console.log(this.ranges);
    };
    AddEvent = __decorate([
        core_1.Component({
            selector: 'add-event',
            template: "\n\n        <time-picker></time-picker>\n\n        <div style=\"margin: 0 0 30px 0\">\n            <range-time-slider (sliderChanged) = \"ChangeLimits($event)\"\n                                [min] = '7'\n                                [max] = '24' [step] = '1'\n                                [snap] = 'false'>\n            </range-time-slider>\n        </div>\n\n        <h3>{{dayDate}}</h3>\n\n        <p>range_min - {{min_hour}}</p>\n        <p>range_max - {{max_hour}}</p>\n        <p>\u0427\u0430\u0441\u043E\u0432 - {{hoursCount}}</p>\n        <p>\u041C\u0438\u043D\u0443\u0442 - {{minutesCount}}</p>\n\n        <button (click) = \"divideRange(25)\">\u0420\u0430\u0437\u0431\u0438\u0442\u044C \u043F\u043E 10 \u043C\u0438\u043D\u0443\u0442</button>\n\n        <div>\n            <hour-list  [range_min_hour] = \"min_hour\" \n                        [range_max_hour] = \"max_hour\"\n                        [rangesArray] = \"ranges\"\n                        [minutesArray] = \"arrayMinutes\"\n            ></hour-list>\n        </div>\n\n\n    "
        }), 
        __metadata('design:paramtypes', [router_1.ActivatedRoute])
    ], AddEvent);
    return AddEvent;
}());
exports.AddEvent = AddEvent;
//# sourceMappingURL=addEvent.component.js.map
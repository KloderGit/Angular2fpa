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
var AddEvent = (function () {
    function AddEvent() {
        this.min = 10;
        this.max = 23;
    }
    AddEvent.prototype.ChangeRange = function (range) {
        this.min = range[0];
        this.max = range[1];
    };
    AddEvent = __decorate([
        core_1.Component({
            selector: 'add-event',
            template: "\n        <div>\n            <range-time (rangeChanged) = \"ChangeRange($event)\"></range-time>\n        </div>\n\n            <hour-list [range_min] = \"min\" [range_max] = \"max\"></hour-list>\n\n        <test (ccc) = \"ChangeRange($event)\"></test>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], AddEvent);
    return AddEvent;
}());
exports.AddEvent = AddEvent;
//# sourceMappingURL=addEvent.component.js.map
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
var TimePicker = (function () {
    function TimePicker() {
        this.timepickerChanged = new core_1.EventEmitter();
    }
    TimePicker.prototype.onChange = function (element) {
        var array = element.value.split(':');
        this.timepickerChanged.emit([parseInt(array[0]), parseInt(array[1])]);
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], TimePicker.prototype, "timepickerChanged", void 0);
    TimePicker = __decorate([
        core_1.Component({
            selector: 'time-picker',
            template: "\n        <p><input type=\"time\" (change) = \"onChange($event.target)\"></p>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], TimePicker);
    return TimePicker;
}());
exports.TimePicker = TimePicker;
//# sourceMappingURL=time-picker.js.map
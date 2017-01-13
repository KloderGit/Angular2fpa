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
var RangeSlider = (function () {
    function RangeSlider() {
        this.rangeSliderChanged = new core_1.EventEmitter();
    }
    RangeSlider.prototype.ngOnInit = function () {
        if (this.min == undefined) {
            this.min = 1;
        }
        if (this.max == undefined) {
            this.max = 100;
        }
        if (this.step == undefined) {
            this.step = 1;
        }
        if (this.value == undefined) {
            this.value = 1;
        }
        if (this.labels == undefined) {
            this.labels = true;
        }
        this.rangeSliderChanged.emit(this.value);
    };
    RangeSlider.prototype.onChange = function (element) {
        this.value = parseInt(element.value);
        this.rangeSliderChanged.emit(this.value);
    };
    RangeSlider.prototype.onCountChanged = function (element) {
        this.value = parseInt(element.value);
        this.rangeSliderChanged.emit(this.value);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], RangeSlider.prototype, "min", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], RangeSlider.prototype, "max", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], RangeSlider.prototype, "step", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], RangeSlider.prototype, "labels", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], RangeSlider.prototype, "value", void 0);
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], RangeSlider.prototype, "rangeSliderChanged", void 0);
    RangeSlider = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'range-slider',
            template: "\n    <div class=\"container\">\n        <div class=\"row\" *ngIf = \"labels\">\n            <div class=\"col-md-4\" style=\"text-align: left\">{{min}}</div>\n            <div class=\"col-md-4\" style=\"text-align: center\">\n                \u0412\u044B\u0431\u0440\u0430\u043D\u043D\u043E: <input type=\"text\" value=\"{{value}}\" (change) = \"onCountChanged($event.target)\" />\n            </div>\n            <div class=\"col-md-4\" style=\"text-align: right\">{{max}}</div>\n        </div>\n        <div class=\"row\">\n            <input class=\"range-slider\" type=\"range\" min=\"{{min}}\" max=\"{{max}}\" step=\"{{step}}\" value=\"{{value}}\"\n                    (change) = \"onChange($event.target)\"/>\n        </div>\n    </div>                \n    ",
            styleUrls: ['range-slider.css']
        }), 
        __metadata('design:paramtypes', [])
    ], RangeSlider);
    return RangeSlider;
}());
exports.RangeSlider = RangeSlider;
//# sourceMappingURL=range-slider.js.map
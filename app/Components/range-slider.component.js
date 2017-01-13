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
var RangeSliderRange = (function () {
    function RangeSliderRange() {
        this.sliderChanged = new core_1.EventEmitter();
        this.labels = [];
    }
    RangeSliderRange.prototype.ngOnInit = function () {
        for (var i = this.min; i <= this.max; i++) {
            this.labels.push(i);
        }
        this.widgetInit();
    };
    RangeSliderRange.prototype.widgetInit = function () {
        var context = this;
        var emmiter = this.sliderChanged;
        jQuery('.range-slider').jRange({
            from: context.min,
            to: context.max,
            step: 0.01,
            scale: context.labels,
            format: '%s',
            width: 600,
            showLabels: true,
            isRange: true,
            snap: context.snap,
            onstatechange: initChange()
        });
        function initChange() {
            handleChange(jQuery('.range-slider')[0].value);
        }
        jQuery('.range-slider').on('change', function () {
            handleChange(this.value);
        });
        function handleChange(value) {
            var array = value.split(',');
            var res = [];
            res.push(parseInt(array[0]));
            res.push(parseInt(array[1]));
            emmiter.emit(res);
        }
    };
    __decorate([
        core_1.Output(), 
        __metadata('design:type', Object)
    ], RangeSliderRange.prototype, "sliderChanged", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], RangeSliderRange.prototype, "min", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], RangeSliderRange.prototype, "max", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], RangeSliderRange.prototype, "step", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Boolean)
    ], RangeSliderRange.prototype, "snap", void 0);
    RangeSliderRange = __decorate([
        core_1.Component({
            selector: 'range-time-slider',
            template: "\n        <div style=\"width: 600px; margin: 0 auto\">\n            <input type=\"hidden\" class=\"range-slider\" value=\"10,13\" />\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], RangeSliderRange);
    return RangeSliderRange;
}());
exports.RangeSliderRange = RangeSliderRange;
//# sourceMappingURL=range-slider.component.js.map
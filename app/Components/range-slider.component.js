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
        this.sliderChanged = new core_1.EventEmitter();
    }
    RangeSlider.prototype.ngOnInit = function () {
        this.widgetInit();
    };
    RangeSlider.prototype.widgetInit = function () {
        var emmiter = this.sliderChanged;
        jQuery('.range-slider').jRange({
            from: 7,
            to: 24,
            step: 1,
            scale: [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
            format: '%s ч.',
            width: 600,
            showLabels: true,
            isRange: true,
            snap: true,
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
    ], RangeSlider.prototype, "sliderChanged", void 0);
    RangeSlider = __decorate([
        core_1.Component({
            selector: 'range-time',
            template: "\n        <div style=\"width: 600px; margin: 0 auto\">\n            <input type=\"hidden\" class=\"range-slider\" value=\"10,13\" />\n        </div>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], RangeSlider);
    return RangeSlider;
}());
exports.RangeSlider = RangeSlider;
//# sourceMappingURL=range-slider.component.js.map
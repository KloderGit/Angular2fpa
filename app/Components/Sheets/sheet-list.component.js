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
var event_model_1 = require('./../../Models/event.model');
var core_1 = require('@angular/core');
var SheetList = (function () {
    function SheetList() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', (typeof (_a = typeof event_model_1.ControlRegister !== 'undefined' && event_model_1.ControlRegister) === 'function' && _a) || Object)
    ], SheetList.prototype, "sheets", void 0);
    SheetList = __decorate([
        core_1.Component({
            selector: 'sheet-list',
            templateUrl: 'sheet-list.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SheetList);
    return SheetList;
    var _a;
}());
exports.SheetList = SheetList;
//# sourceMappingURL=sheet-list.component.js.map
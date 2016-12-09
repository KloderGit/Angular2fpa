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
var event_model_1 = require('./../Models/event.model');
var core_1 = require('@angular/core');
var DayComponent = (function () {
    function DayComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', event_model_1.Event)
    ], DayComponent.prototype, "event", void 0);
    DayComponent = __decorate([
        core_1.Component({
            selector: 'day',
            template: "\n        <p *ngIf = \"event != null\" >{{event.id}}</p>\n        <!--<p *ngIf = \"event != null\" >{{event.date.getDate()}}</p>-->\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], DayComponent);
    return DayComponent;
}());
exports.DayComponent = DayComponent;
//# sourceMappingURL=day.component.js.map
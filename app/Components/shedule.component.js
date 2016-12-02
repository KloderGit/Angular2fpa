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
var Item_1 = require('./../Models/Item');
var core_1 = require('@angular/core');
var Shedule = (function () {
    function Shedule() {
        this.items = [
            { purchase: "Хлеб", done: false, price: 15.9 },
            { purchase: "Масло", done: false, price: 60 },
            { purchase: "Картофель", done: true, price: 22.6 },
            { purchase: "Сыр", done: false, price: 310 }
        ];
    }
    Shedule.prototype.addItem = function (text, price) {
        if (text == null || text == undefined || text.trim() == "") {
            return;
        }
        if (price == null || price == undefined) {
            return;
        }
        this.items.push(new Item_1.Item(text, null, price));
    };
    Shedule = __decorate([
        core_1.Component({
            selector: 'shedule',
            styleUrls: ['app/Views/css/shedule.css'],
            templateUrl: 'app/Views/shedule.html'
        }), 
        __metadata('design:paramtypes', [])
    ], Shedule);
    return Shedule;
}());
exports.Shedule = Shedule;
//# sourceMappingURL=shedule.component.js.map
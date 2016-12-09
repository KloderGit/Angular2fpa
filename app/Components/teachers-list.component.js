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
var TeacherListComponent = (function () {
    function TeacherListComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Array)
    ], TeacherListComponent.prototype, "teachers", void 0);
    TeacherListComponent = __decorate([
        core_1.Component({
            selector: 'teachers-list',
            template: "\n        <div *ngFor = \"let teacher of teachers\">\n            <teacher [teacher] = teacher ></teacher>\n        </div>\n\n        <p *ngFor = \"let teacher of teachers\">\n            <input name=\"dzen\" type=\"radio\">\n            <teacher [teacher] = teacher ></teacher>\n        </p>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], TeacherListComponent);
    return TeacherListComponent;
}());
exports.TeacherListComponent = TeacherListComponent;
//# sourceMappingURL=teachers-list.component.js.map
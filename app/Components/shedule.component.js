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
var discipline_mock_model_1 = require('./../Data/discipline.mock.model');
var events_mock_data_1 = require('./../Data/events.mock.data');
var core_1 = require('@angular/core');
var teachers_mock_data_1 = require('./../Data/teachers.mock.data');
var SheduleComponent = (function () {
    function SheduleComponent() {
        this.events = [];
        this.teachers = [];
        this.disciplines = [];
    }
    SheduleComponent.prototype.ngOnInit = function () {
        this.events = events_mock_data_1.events;
        this.teachers = teachers_mock_data_1.teachers;
        this.disciplines = discipline_mock_model_1.discipline;
    };
    SheduleComponent.prototype.ngAfterViewInit = function () {
        this.selectedTeacher = this.teachers[0];
        this.selectedDiscipline = this.findDiscipline(this.selectedTeacher);
    };
    SheduleComponent.prototype.isActive = function (item) {
        return item == this.selectedDiscipline;
    };
    SheduleComponent.prototype.teacherSelect = function (teacher) {
        return teacher == this.selectedTeacher;
    };
    SheduleComponent.prototype.changeTeacher = function (teacher) {
        this.selectedTeacher = teacher;
        this.selectedDiscipline = this.findDiscipline(this.selectedTeacher);
    };
    SheduleComponent.prototype.changeDiscipline = function (discipline) {
        this.selectedDiscipline = discipline;
    };
    SheduleComponent.prototype.findDiscipline = function (teacher) {
        var result;
        for (var i = 0; i < this.disciplines.length; i++) {
            var tmp = this.disciplines[i];
            if (tmp.teacherId == teacher.id) {
                return this.disciplines[i];
            }
        }
    };
    SheduleComponent = __decorate([
        core_1.Component({
            selector: 'shedule',
            styleUrls: ['app/Views/css/shedule.css'],
            templateUrl: 'app/Views/shedule.html'
        }), 
        __metadata('design:paramtypes', [])
    ], SheduleComponent);
    return SheduleComponent;
}());
exports.SheduleComponent = SheduleComponent;
//# sourceMappingURL=shedule.component.js.map
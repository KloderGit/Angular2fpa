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
var DataManager_1 = require('./../Data/DataManager');
var teacher_mode_1 = require('./../Models/teacher.mode');
var core_1 = require('@angular/core');
var SheduleComponent = (function () {
    function SheduleComponent(dataManager) {
        this.dataManager = dataManager;
    }
    SheduleComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataManager.getTeachers()
            .then(function (data) {
            _this.teachers = data;
            _this.selectedTeacher = _this.teachers[0];
        });
        this.dataManager.getDiscipline()
            .then(function (data) {
            _this.disciplines = data;
            _this.selectedDiscipline = _this.findDiscipline(_this.selectedTeacher);
        });
        this.dataManager.getEvents()
            .then(function (data) {
            _this.events = data;
        });
    };
    SheduleComponent.prototype.rangeChange = function (event) {
        console.log(event);
    };
    SheduleComponent.prototype.addTeacher = function () {
        this.dataManager.addTeacher(new teacher_mode_1.Teacher("tch4", "Макарова"))
            .then(function (res) {
            if (res == true) {
                console.log("Успешно");
            }
            else {
                console.log("Провал");
            }
        });
    };
    SheduleComponent.prototype.teacherSelect = function () {
        this.selectedTeacher = this.teachers[0];
        this.selectedDiscipline = this.findDiscipline(this.selectedTeacher);
    };
    SheduleComponent.prototype.changeTeacher = function (teacher) {
        this.selectedTeacher = teacher;
        this.selectedDiscipline = this.findDiscipline(this.selectedTeacher);
    };
    SheduleComponent.prototype.changeDiscipline = function (discipline) {
        this.selectedDiscipline = discipline;
    };
    SheduleComponent.prototype.findDiscipline = function (teacher) {
        if (teacher == null) {
            return;
        }
        for (var i = 0; i < this.disciplines.length; i++) {
            var tmp = this.disciplines[i];
            if (tmp.teacherId == teacher.id) {
                return this.disciplines[i];
            }
        }
    };
    SheduleComponent.prototype.selectTeacherAndDiscipline = function (idTeacher, idDiscipline) {
        this.selectedTeacher = this.findTeacherById(idTeacher);
        this.selectedDiscipline = this.findDisciplineById(idDiscipline);
    };
    SheduleComponent.prototype.findTeacherById = function (id) {
        var index = this.teachers.map(function (x) { return x.id; }).indexOf(id);
        return this.teachers[index];
    };
    SheduleComponent.prototype.findDisciplineById = function (id) {
        var index = this.disciplines.map(function (x) { return x.id; }).indexOf(id);
        return this.disciplines[index];
    };
    SheduleComponent = __decorate([
        core_1.Component({
            selector: 'shedule',
            styleUrls: ['app/Views/css/shedule.css'],
            templateUrl: 'app/Views/shedule.html'
        }), 
        __metadata('design:paramtypes', [DataManager_1.DataManager])
    ], SheduleComponent);
    return SheduleComponent;
}());
exports.SheduleComponent = SheduleComponent;
//# sourceMappingURL=shedule.component.js.map
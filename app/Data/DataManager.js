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
var MockDataService_1 = require('./../Services/MockDataService');
var DataManager = (function () {
    function DataManager() {
        console.log("Создание DataManager");
        this.service = new MockDataService_1.MockDataServices();
        this.Init();
    }
    DataManager.prototype.Init = function () {
        var _this = this;
        console.log("Инициализация DataManager");
        this.teachers = new Promise(function (resolve, reject) {
            resolve(_this.service.getTeachers());
        });
        this.discipline = new Promise(function (resolve, reject) {
            resolve(_this.service.getDiscipline());
        });
        this.events = new Promise(function (resolve, reject) {
            resolve(_this.service.getEvents());
        });
    };
    DataManager.prototype.getTeachers = function () {
        return this.teachers;
    };
    DataManager.prototype.getDiscipline = function () {
        return this.discipline;
    };
    DataManager.prototype.getEvents = function () {
        return this.events;
    };
    DataManager.prototype.getEventsByDate = function (date) {
        return this.events.then(function (eve) {
            return eve.filter(function (e) { return +e.date == +date; });
        });
    };
    DataManager.prototype.addTeacher = function (teacher) {
        var _this = this;
        var addTeacherQuery = new Promise(function (resolve, reject) {
            if (_this.service.addTeacher(teacher)) {
                resolve();
            }
            else {
                reject();
            }
        });
        return addTeacherQuery.then(function () {
            _this.teachers.then(function (teachers) { return teachers.push(teacher); });
            console.log("Преподаватель успешно добавлен в DataManager");
            return true;
        }, function () {
            console.log("Преподаватель не добавлен. Сервис вернул ошибку");
            return false;
        });
    };
    DataManager.prototype.addEvent = function (event) {
        var _this = this;
        var addEventQuery = new Promise(function (resolve, reject) {
            if (_this.service.addEvent(event)) {
                resolve();
            }
            else {
                reject();
            }
        });
        return addEventQuery.then(function () {
            _this.events.then(function (events) { return events.push(event); });
            console.log("Ведомость успешно добавлена в DataManager");
            return true;
        }, function () {
            console.log("Ведомость не добавлена. Сервис вернул ошибку");
            return false;
        });
    };
    DataManager = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], DataManager);
    return DataManager;
}());
exports.DataManager = DataManager;
//# sourceMappingURL=DataManager.js.map
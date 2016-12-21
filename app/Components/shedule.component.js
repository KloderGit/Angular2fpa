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
        this.selectedTeacherHTML = document.getElementById('teacher_list');
        console.log(this.selectedTeacherHTML);
        // let mmm = this.selectedTeacherHTML.getElementsByClassName('teacher_item')[0];
        // if (mmm.checked == false)
        // {
        // mmm.click();
        // }
    };
    SheduleComponent.prototype.changeTeacher = function (teacher) {
        this.selectedTeacher = teacher;
        this.selectedDiscipline = this.findDiscipline(this.selectedTeacher);
        // let teacher_disciplines_HTMLElement = document.getElementById('teacher_disciplines');
        // let teacher_discipline_item_HTMLElement = teacher_disciplines_HTMLElement.getElementsByClassName('teacher_discipline_item')[0];
        //         console.log(teacher_discipline_item_HTMLElement);
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
            template: "\n        <div id=\"teacher_list\">\n            <div *ngFor = \"let teacher of teachers; let tchrIndx = index\" >\n                <input name=\"tchr\" type=\"radio\" (change) = \"changeTeacher(teacher)\" class = \"teacher_item\">\n                <teacher [teacher] = \"teacher\" ></teacher>\n            </div>\n        </div>\n\n        <div *ngIf = \"selectedTeacher != null\" id=\"teacher_disciplines\">\n            <div *ngFor = \"let discipline of disciplines | discp: selectedTeacher\" class=\"teacher_discipline_item\">\n                <input name=\"disc\" type=\"radio\" (change) = \"changeDiscipline(discipline);\">\n                {{discipline.title}}\n            </div>\n        </div>\n\n        <h2 *ngIf = \"selectedDiscipline != null\">{{selectedDiscipline.title}}</h2>\n\n        <discipline *ngIf = \"selectedDiscipline != null\" \n                    [events] = \"events | oneDiscipln: selectedDiscipline\" >\n        </discipline>\n    "
        }), 
        __metadata('design:paramtypes', [])
    ], SheduleComponent);
    return SheduleComponent;
}());
exports.SheduleComponent = SheduleComponent;
//# sourceMappingURL=shedule.component.js.map
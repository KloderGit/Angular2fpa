"use strict";
var events_mock_data_1 = require('./../Data/events.mock.data');
var discipline_mock_model_1 = require('./../Data/discipline.mock.model');
var teachers_mock_data_1 = require('./../Data/teachers.mock.data');
var MockDataServices = (function () {
    function MockDataServices() {
        console.log("Создание Service");
    }
    MockDataServices.prototype.getTeachers = function () {
        return teachers_mock_data_1.teachersData;
    };
    MockDataServices.prototype.getDiscipline = function () {
        return discipline_mock_model_1.discipline;
    };
    MockDataServices.prototype.getEvents = function () {
        return events_mock_data_1.events;
    };
    MockDataServices.prototype.addTeacher = function (teacher) {
        teachers_mock_data_1.teachersData.push(teacher);
    };
    return MockDataServices;
}());
exports.MockDataServices = MockDataServices;
//# sourceMappingURL=MockDataService.js.map
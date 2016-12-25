"use strict";
var teachers_mock_data_1 = require('./../Data/teachers.mock.data');
var MockDataServices = (function () {
    function MockDataServices() {
    }
    MockDataServices.prototype.getTeachers = function () {
        return teachers_mock_data_1.teachersData;
    };
    MockDataServices.prototype.addTeacher = function (teacher) {
        teachers_mock_data_1.teachersData.push(teacher);
    };
    return MockDataServices;
}());
exports.MockDataServices = MockDataServices;
//# sourceMappingURL=MockDataService.js.map
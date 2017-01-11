"use strict";
var functions_1 = require('./../Models/functions');
var RangeOfHour = (function () {
    function RangeOfHour(startTime, length) {
        this.arrayMinutes = [];
        this.id = functions_1.Guid();
        this.startTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDay(), startTime.getHours(), startTime.getMinutes());
        this.hour = startTime.getHours();
        this.minute = startTime.getMinutes();
        this.width = length;
    }
    return RangeOfHour;
}());
exports.RangeOfHour = RangeOfHour;
//# sourceMappingURL=range-of-hour.model.js.map
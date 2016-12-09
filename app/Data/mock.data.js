"use strict";
var discipline_model_1 = require('./../Models/discipline.model');
var event_model_1 = require('./../Models/event.model');
exports.events = [
    new event_model_1.Event("111", new Date(2015, 3, 1), new discipline_model_1.Discipline("aaa", "Теория и методика", true)),
    new event_model_1.Event("222", new Date(2015, 3, 3), new discipline_model_1.Discipline("aaa", "Теория и методика", true)),
    new event_model_1.Event("333", new Date(2015, 3, 6), new discipline_model_1.Discipline("aaa", "Теория и методика", true)),
    new event_model_1.Event("444", new Date(2015, 3, 9), new discipline_model_1.Discipline("aaa", "Теория и методика", true)),
    new event_model_1.Event("555", new Date(2015, 3, 12), new discipline_model_1.Discipline("aaa", "Теория и методика", true)),
    new event_model_1.Event("666", new Date(2015, 3, 15), new discipline_model_1.Discipline("aaa", "Теория и методика", true)),
    new event_model_1.Event("777", new Date(2015, 3, 18), new discipline_model_1.Discipline("aaa", "Теория и методика", true)),
    new event_model_1.Event("000", new Date(2015, 2, 30), new discipline_model_1.Discipline("aaa", "Теория и методика", true)),
    new event_model_1.Event("101", new Date(2010, 1, 18), new discipline_model_1.Discipline("aaa", "Теория и методика", true))
];
//# sourceMappingURL=mock.data.js.map
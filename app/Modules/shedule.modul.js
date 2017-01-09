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
var app_component_1 = require('./../Components/app.component');
var hours_list_component_1 = require('./../Components/hours-list.component');
var addEvent_component_1 = require('./../Components/addEvent.component');
var range_slider_component_1 = require('./../Components/range-slider.component');
var DataManager_1 = require('./../Data/DataManager');
var one_discipline_pipe_1 = require('./../Pipes/one-discipline.pipe');
var disciplines_pipe_1 = require('./../Pipes/disciplines.pipe');
var teachers_list_component_1 = require('./../Components/teachers-list.component');
var teachers_component_1 = require('./../Components/teachers.component');
var discipline_component_1 = require('./../Components/discipline.component');
var month_events_pipe_1 = require('./../Pipes/month-events.pipe');
var day_event_pipe_1 = require('./../Pipes/day-event.pipe');
var day_component_1 = require('./../Components/day.component');
var month_component_1 = require('./../Components/month.component');
var calendar_component_1 = require('./../Components/calendar.component');
var forms_1 = require('@angular/forms');
var shedule_component_1 = require('./../Components/shedule.component');
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var routerMaps = router_1.RouterModule.forRoot([
    { path: 'calendar', component: shedule_component_1.SheduleComponent },
    { path: 'addEvent', component: addEvent_component_1.AddEvent },
    { path: '', component: shedule_component_1.SheduleComponent },
    { path: '**', component: shedule_component_1.SheduleComponent }
]);
var SheduleAppModule = (function () {
    function SheduleAppModule() {
    }
    SheduleAppModule = __decorate([
        core_1.NgModule({
            imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, routerMaps],
            declarations: [app_component_1.AppComponent, shedule_component_1.SheduleComponent, calendar_component_1.CalendarComponent, month_component_1.MonthComponent,
                day_component_1.DayComponent, day_event_pipe_1.DayEventPipe, month_events_pipe_1.MonthEventsPipe, discipline_component_1.DisciplineComponent,
                teachers_component_1.TeacherComponent, teachers_list_component_1.TeacherListComponent, disciplines_pipe_1.DisciplinePipe, one_discipline_pipe_1.OneDisciplinePipe, range_slider_component_1.RangeSlider, addEvent_component_1.AddEvent, hours_list_component_1.HoursList],
            bootstrap: [app_component_1.AppComponent],
            providers: [DataManager_1.DataManager]
        }), 
        __metadata('design:paramtypes', [])
    ], SheduleAppModule);
    return SheduleAppModule;
}());
exports.SheduleAppModule = SheduleAppModule;
//# sourceMappingURL=shedule.modul.js.map
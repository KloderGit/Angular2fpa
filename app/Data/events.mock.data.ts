import { Discipline } from './../Models/discipline.model';
import { ControlRegister } from './../Models/control-register.model';

export let events: ControlRegister[] = [
    new ControlRegister("111", new Date(2015,3,1), "h2" ),
    new ControlRegister("222", new Date(2015,3,3), "d1" ),
    new ControlRegister("333", new Date(2015,3,6), "d1" ),
    new ControlRegister("444", new Date(2015,3,9), "d2" ),
    new ControlRegister("555", new Date(2015,3,12), "d2" ),
    new ControlRegister("666", new Date(2015,3,15), "d2" ),
    new ControlRegister("777", new Date(2015,3,18), "d1" ),
    new ControlRegister("000", new Date(2015,2,30), "h1"),
    new ControlRegister("103", new Date(2015,1,18), "d1" ),
    new ControlRegister("101", new Date(2010,1,18), "d1" )
];
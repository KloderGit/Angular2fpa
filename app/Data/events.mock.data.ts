import { Discipline } from './../Models/discipline.model';
import { Event } from './../Models/event.model';

export let events: Event[] = [
    new Event("111", new Date(2015,3,1), "h2" ),
    new Event("222", new Date(2015,3,3), "d1" ),
    new Event("333", new Date(2015,3,6), "d1" ),
    new Event("444", new Date(2015,3,9), "d2" ),
    new Event("555", new Date(2015,3,12), "d2" ),
    new Event("666", new Date(2015,3,15), "d2" ),
    new Event("777", new Date(2015,3,18), "d1" ),
    new Event("000", new Date(2015,2,30), "h1"),
    new Event("101", new Date(2010,1,18), "d1" )
];
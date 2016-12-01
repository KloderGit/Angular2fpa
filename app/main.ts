import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

@Component({
    selector: 'hello-angular',
    template: `
    <div>
        Hello Angular! 
        /Здесь будет новое приложение для личного кабинета сайта FPA/
    </div>
    `
})

class HelloAngular{}

@NgModule({
    imports: [ BrowserModule ],
    declarations: [ HelloAngular ],
    bootstrap: [ HelloAngular ]
})

class HelloAngularAppModule {}

platformBrowserDynamic().bootstrapModule( HelloAngularAppModule );
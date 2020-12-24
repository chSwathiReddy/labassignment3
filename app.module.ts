import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { M2Module } from './m1/m2/m2.module';
import { M1Module } from './m1/m1.module';
import { ChildComponent } from './child/child.component';
import { Child1Component } from './child1/child1.component';

@NgModule({
  declarations: [
    AppComponent,
    ChildComponent,
    Child1Component
  ],
  imports: [
    BrowserModule, M2Module,M1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

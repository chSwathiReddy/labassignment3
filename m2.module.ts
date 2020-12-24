import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Comp12Component } from './comp12/comp12.component';
import { M1Module } from '../m1.module';



@NgModule({
  declarations: [Comp12Component],
  imports: [
    CommonModule,M1Module
  ],
  exports: [
    Comp12Component
  ]
})
export class M2Module { }

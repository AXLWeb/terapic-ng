import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TratamientosRoutingModule } from './tratamientos-routing.module';
import { TratamientosComponent } from './tratamientos.component';


@NgModule({
  declarations: [
    TratamientosComponent
  ],
  imports: [
    CommonModule,
    TratamientosRoutingModule
  ]
})
export class TratamientosModule { }

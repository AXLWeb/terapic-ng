import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CentroRoutingModule } from './centro-routing.module';
import { CentroComponent } from './centro.component';


@NgModule({
  declarations: [
    CentroComponent
  ],
  imports: [
    CommonModule,
    CentroRoutingModule
  ]
})
export class CentroModule { }

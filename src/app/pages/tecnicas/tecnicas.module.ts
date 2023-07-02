import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TecnicasRoutingModule } from './tecnicas-routing.module';
import { TecnicasComponent } from './tecnicas.component';


@NgModule({
  declarations: [
    TecnicasComponent
  ],
  imports: [
    CommonModule,
    TecnicasRoutingModule
  ]
})
export class TecnicasModule { }

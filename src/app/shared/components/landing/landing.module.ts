import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LandingComponent } from './landing.component';
import {
  IntroComponent,
  TratamientosComponent,
  TecnicasComponent,
  CentroComponent,
  ContactoComponent,
} from 'src/app/components';

@NgModule({
  declarations: [
    LandingComponent,
    IntroComponent,
    TratamientosComponent,
    TecnicasComponent,
    CentroComponent,
    ContactoComponent,
  ],
  imports: [CommonModule],
})
export class LandingModule {}

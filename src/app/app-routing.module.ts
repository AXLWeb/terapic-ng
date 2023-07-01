import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  CentroComponent,
  CvComponent,
  TecnicasComponent,
  TratamientosComponent,
} from './pages';

const routes: Routes = [
  {
    path: 'centro',
    title: 'Centro',
    component: CentroComponent,
  },
  {
    path: 'cv',
    title: 'Currículum Vitae',
    component: CvComponent,
  },
  {
    path: 'tecnicas',
    title: 'Técnicas',
    component: TecnicasComponent,
  },
  {
    path: 'tratamientos',
    title: 'Tratamientos',
    component: TratamientosComponent,
  },

  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

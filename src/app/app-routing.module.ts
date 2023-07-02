import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './shared/components/landing/landing.component';

const routes: Routes = [
  {
    path: 'centro',
    loadChildren: () =>
      import('./pages/centro/centro.module').then((m) => m.CentroModule),
  },
  {
    path: 'cv',
    loadChildren: () => import('./pages/cv/cv.module').then((m) => m.CvModule),
  },
  {
    path: 'tecnicas',
    loadChildren: () =>
      import('./pages/tecnicas/tecnicas.module').then((m) => m.TecnicasModule),
  },
  {
    path: 'tratamientos',
    loadChildren: () =>
      import('./pages/tratamientos/tratamientos.module').then(
        (m) => m.TratamientosModule
      ),
  },
  { path: '', component: LandingComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

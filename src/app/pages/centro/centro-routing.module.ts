import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CentroComponent } from './centro.component';

const routes: Routes = [{ path: '', component: CentroComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CentroRoutingModule { }

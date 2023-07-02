import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TecnicasComponent } from './tecnicas.component';

const routes: Routes = [{ path: '', component: TecnicasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TecnicasRoutingModule { }

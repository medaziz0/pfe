import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import { ListContratComponent } from './list-contrat/list-contrat.component';




const routes: Routes = [
  { path: '', component: AddContratComponent },
  { path: 'list', component: ListContratComponent },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratRoutingModule { }

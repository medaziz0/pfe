import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import { ListContratComponent } from './list-contrat/list-contrat.component';
import { AuthguardService } from 'src/app/services/authguard.service';




const routes: Routes = [
  { path: '', component: AddContratComponent,canActivate: [AuthguardService] },
  { path: 'list', component: ListContratComponent,canActivate: [AuthguardService] },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratRoutingModule { }

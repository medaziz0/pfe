import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddProjetComponent } from './add-projet/add-projet.component';
import { ListProjetComponent } from './list-projet/list-projet.component';
import { DetailProjetComponent } from './detail-projet/detail-projet.component';
import { EditProjetComponent } from './edit-projet/edit-projet.component';
import { EditAOComponent } from '../gestion-ao/edit-ao/edit-ao.component';
import { EditContratComponent } from '../gestion-contrat/edit-contrat/edit-contrat.component';
import { EditFactureComponent } from '../gestion-facture/edit-facture/edit-facture.component';
import { AddAOComponent } from '../gestion-ao/add-ao/add-ao.component';
import { AuthguardService } from 'src/app/services/authguard.service';



const routes: Routes = [
  { path: '', component: AddProjetComponent,canActivate: [AuthguardService] },
  { path: 'list', component: ListProjetComponent,canActivate: [AuthguardService] },
  { path: 'detailProjet/:id', component: DetailProjetComponent,canActivate: [AuthguardService] },
  { path: 'editProjet/:id', component: EditProjetComponent,canActivate: [AuthguardService] },
  { path: 'editAO/:id', component: EditAOComponent,canActivate: [AuthguardService] },
  { path: 'editContrat/:id', component: EditContratComponent,canActivate: [AuthguardService] },
  { path: 'editFacture/:id', component: EditFactureComponent,canActivate: [AuthguardService] },
  { path: 'addao', component: AddAOComponent,canActivate: [AuthguardService] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetRoutingModule { }

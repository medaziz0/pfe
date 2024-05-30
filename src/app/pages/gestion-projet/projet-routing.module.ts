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



const routes: Routes = [
  { path: '', component: AddProjetComponent },
  { path: 'list', component: ListProjetComponent },
  { path: 'detailProjet/:id', component: DetailProjetComponent },
  { path: 'editProjet/:id', component: EditProjetComponent },
  { path: 'editAO/:id', component: EditAOComponent },
  { path: 'editContrat/:id', component: EditContratComponent },
  { path: 'editFacture/:id', component: EditFactureComponent },
  { path: 'addao', component: AddAOComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjetRoutingModule { }

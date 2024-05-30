import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAOComponent } from 'src/app/pages/gestion-ao/add-ao/add-ao.component';
import { AddContratComponent } from 'src/app/pages/gestion-contrat/add-contrat/add-contrat.component';
import { AddFactureComponent } from 'src/app/pages/gestion-facture/add-facture/add-facture.component';
import { AddProjetComponent } from 'src/app/pages/gestion-projet/add-projet/add-projet.component';



const routes: Routes = [
  { path: 'projet', component: AddProjetComponent },
  { path: 'ao', component: AddAOComponent },
  { path: 'contrat', component: AddContratComponent },
  { path: 'facture', component: AddFactureComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }

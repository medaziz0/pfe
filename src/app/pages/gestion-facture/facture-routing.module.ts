import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddAOComponent } from '../gestion-ao/add-ao/add-ao.component';
import { AddFactureComponent } from './add-facture/add-facture.component';
import { ListFactureComponent } from './list-facture/list-facture.component';
import { DetailFactureComponent } from './detail-facture/detail-facture.component';
import { AuthguardService } from 'src/app/services/authguard.service';




const routes: Routes = [
  { path: '', component: AddFactureComponent,canActivate: [AuthguardService] },
  { path: 'list', component: ListFactureComponent,canActivate: [AuthguardService] },
  { path: 'detail/:id', component: DetailFactureComponent,canActivate: [AuthguardService] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FactureRoutingModule { }

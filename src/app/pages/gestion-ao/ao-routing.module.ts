import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAOComponent } from './list-ao/list-ao.component';
import { AddAOComponent } from './add-ao/add-ao.component';
import { DetailAOComponent } from './detail-ao/detail-ao.component';
import { EditAOComponent } from './edit-ao/edit-ao.component';
import { AuthguardService } from 'src/app/services/authguard.service';




const routes: Routes = [
  { path: '', component: AddAOComponent,canActivate: [AuthguardService] },
  { path: 'list', component: ListAOComponent ,canActivate: [AuthguardService]},
  { path: 'detailAO/:id', component: DetailAOComponent,canActivate: [AuthguardService] },
  { path: 'editAO/:id', component: EditAOComponent,canActivate: [AuthguardService] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AORoutingModule { }

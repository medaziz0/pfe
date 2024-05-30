import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAOComponent } from './list-ao/list-ao.component';
import { AddAOComponent } from './add-ao/add-ao.component';
import { DetailAOComponent } from './detail-ao/detail-ao.component';
import { EditAOComponent } from './edit-ao/edit-ao.component';




const routes: Routes = [
  { path: '', component: AddAOComponent },
  { path: 'list', component: ListAOComponent },
  { path: 'detailAO/:id', component: DetailAOComponent },
  { path: 'editAO/:id', component: EditAOComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AORoutingModule { }

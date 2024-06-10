import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { AuthguardService } from 'src/app/services/authguard.service';

const routes: Routes = [
  { path: 'user/add', component: AddUserComponent,canActivate: [AuthguardService] },
  { path: 'user/edit', component: EditUserComponent,canActivate: [AuthguardService] },
  { path: 'user/list', component: ListUserComponent,canActivate: [AuthguardService] },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GestionUserRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GestionUserRoutingModule } from './gestion-user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { EditUserComponent } from './edit-user/edit-user.component';
import { ListUserComponent } from './list-user/list-user.component';
import { DialogModule } from 'primeng/dialog';

const routes: Routes = [
  { path: 'user/add', component: AddUserComponent },
  { path: 'user/edit', component: EditUserComponent },
  { path: 'user/list', component: ListUserComponent },
];

@NgModule({
  declarations: [
    AddUserComponent,
    EditUserComponent,
    ListUserComponent
  ],
  imports: [
    DialogModule,
    CommonModule,
    GestionUserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ]
})
export class GestionUserModule { }

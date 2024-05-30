import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContratRoutingModule } from './contrat-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DetailProjetComponent } from './detail-contrat/detail-contrat.component';
import { AddContratComponent } from './add-contrat/add-contrat.component';
import { EditContratComponent } from './edit-contrat/edit-contrat.component';



@NgModule({
  declarations: [AddContratComponent],
  imports: [
    CommonModule,
    ContratRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class ContratModule { }

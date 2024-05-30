import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FactureRoutingModule } from './facture-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddFactureComponent } from './add-facture/add-facture.component';
import { ListFactureComponent } from './list-facture/list-facture.component';
import { DetailFactureComponent } from './detail-facture/detail-facture.component';




@NgModule({
  declarations: [AddFactureComponent,ListFactureComponent,DetailFactureComponent],
  imports: [
    CommonModule,
    FactureRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    
  ]
})
export class FactureModule { }

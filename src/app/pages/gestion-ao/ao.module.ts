import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AORoutingModule } from './ao-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddAOComponent } from './add-ao/add-ao.component';
import { DetailAOComponent } from './detail-ao/detail-ao.component';
import { ListAOComponent } from './list-ao/list-ao.component';
import { EditAOComponent } from './edit-ao/edit-ao.component';



@NgModule({
  declarations: [DetailAOComponent,ListAOComponent,EditAOComponent],
  imports: [
    CommonModule,
    AORoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class AoModule { }

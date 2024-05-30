import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjetRoutingModule } from './projet-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProjetComponent } from './add-projet/add-projet.component';
import { ListProjetComponent } from './list-projet/list-projet.component';
import { DetailProjetComponent } from './detail-projet/detail-projet.component';
import { EditProjetComponent } from './edit-projet/edit-projet.component';
import { EditContratComponent } from '../gestion-contrat/edit-contrat/edit-contrat.component';
import { EditFactureComponent } from '../gestion-facture/edit-facture/edit-facture.component';
import { ComponentsModule } from "../../components/components.module";
import { AddAOComponent } from '../gestion-ao/add-ao/add-ao.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button'; 
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';


@NgModule({
    declarations: [AddProjetComponent, ListProjetComponent, DetailProjetComponent, EditProjetComponent, EditContratComponent, EditFactureComponent,AddAOComponent],
    imports: [
        CommonModule,
        ProjetRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        ComponentsModule,
        BrowserAnimationsModule, 
        DialogModule,
        ButtonModule,
        ToastModule
    ],
    providers: [MessageService,{ provide: LocationStrategy, useClass: HashLocationStrategy }],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA  // Optional: Only if you're using custom web components
  ]
})
export class ProjetModule { }

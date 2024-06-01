import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule, HashLocationStrategy, LocationStrategy } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthLayoutRoutes } from './auth-layout.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AuthLayoutRoutes),
    FormsModule,
    ReactiveFormsModule,
    ToastModule,
    // NgbModule
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgotPasswordComponent
  ],
  providers: [MessageService,{ provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class AuthLayoutModule { }

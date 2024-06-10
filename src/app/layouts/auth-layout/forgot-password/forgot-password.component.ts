import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit, OnDestroy {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = "";
  roles: string[] = [];
  user: any;
  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService,
    private authService: AuthentificationService,
    private formBuilder: FormBuilder,
   private messageService: MessageService
  ) {}

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required]]
    });
  }

  ngOnDestroy() {}
  sendMail(){
    console.log("hereee")
    if (this.loginForm.valid) {
      this.authService.forgotPassword(this.loginForm.get('email').value).subscribe(
        response => {
          // Show toast on success
          this.messageService.add({severity:'success', summary: 'Success', detail: response.message});
        },
        error => {
          // Show toast on error
          this.messageService.add({severity:'error', summary: 'Error', detail: error.error.message});
        }
      );
    } else {
      // Mark all controls as touched to trigger validation messages
      this.loginForm.markAllAsTouched();
    }
  }
    
}

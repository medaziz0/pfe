import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
  resetForm: any;
  email: string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private authService: AuthentificationService,
    private formBuilder: FormBuilder,
    private messageService: MessageService
  ) { }

  ngOnInit(): void {
    this.email = this.route.snapshot.paramMap.get('email');
    console.log('email: ',this.email)
    this.resetForm = this.formBuilder.group({
      password: ["", [Validators.required]],
      confirmPassword: ["", [Validators.required]],
    });
  }

  reset() {
    if (this.resetForm.get('password').value !== this.resetForm.get('confirmPassword').value) {
      this.messageService.add({ severity: 'error', summary: 'Error', detail: 'Passwords do not match' });
      return;
    }

    this.authService.resetPassword(this.resetForm.get('password').value, this.email).subscribe(
      res => {
        this.router.navigate(['/login']); // Redirect to login after successful password reset
        
      },
      error => {
        this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message});
      }
    );
  }
}

import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';
import { TokenStorageService } from 'src/app/services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = "";
  roles: string[] = [];
  user: any;
  constructor(
    private router: Router,
    private tokenStorage: TokenStorageService,
    private authService: AuthentificationService,
    private formBuilder: FormBuilder
  ) {}

  loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ["", [Validators.required]],
      password: ["", [Validators.required]],
    });
  }

  ngOnDestroy() {}

  login() {
    this.authService.login(this.loginForm.value).subscribe(
      (data: any) => { // Correction ici : Typage de data en any pour l'instant
        this.tokenStorage.saveToken(data.accessToken);       
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigate(["list"]);
      },
      (err) => {
        console.log("here error after login", err);
      }
    );
  }
}

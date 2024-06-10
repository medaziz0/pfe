import { HttpErrorResponse } from "@angular/common/http";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { MessageService } from "primeng/api";
import { AuthentificationService } from "src/app/services/authentification.service";
import { TokenStorageService } from "src/app/services/token-storage.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
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
    private formBuilder: FormBuilder,
    private messageService: MessageService,
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
      (data: any) => {
        // Successful login
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.router.navigate(["list"]);
      },
      (err: HttpErrorResponse) => {
        // Error handling
        // Server-side error
        console.error(
          `Backend returned code ${err.status}, ` +
            `body was: ${JSON.stringify(err.error)}`
        );
        if (err.status === 400) {
          // Handle 400 Bad Request with custom message
          this.messageService.add({
            severity: "error",
            summary: "Error",
            detail: err.error,
          });
        } else {
          // General server-side error handling
          this.messageService.add({
            severity: "error",
            summary: "Error",
            detail: "le mot de passe est invalid",
          });
        }
        this.isLoginFailed = true;
      }
    );
  }
}

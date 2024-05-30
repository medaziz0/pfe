import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthentificationService } from 'src/app/services/authentification.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authenService: AuthentificationService,
    private formBuilder: FormBuilder,private router: Router,) { }
    signupForm: FormGroup;
  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      firstName: ["", [Validators.required]],
      lastName: ["", [Validators.required]],
      email: ["", [Validators.required]],
      // tel: ["", [Validators.required]],
      password: ["", [Validators.required]],
      confirmPassword: ["", [Validators.required]],
    });
  }
  submitForm() {
    console.log(this.signupForm.value);
    this.signupForm.value.roles = ["admin", "user"];
    this.authenService.signup(this.signupForm.value).subscribe((data) => {});
    this.router.navigate(["projets"]);
  }
}

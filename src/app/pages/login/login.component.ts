import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, UntypedFormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';
import { ILogin } from '../../core/models/auth.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private formBuilderService: FormBuilder, private authService: AuthService) {

  }

  loginForm = this.formBuilderService.group({
    login: ['', Validators.required],
    senha: ['', Validators.required],

  })

  wrongCredentials : boolean = false;

  onSubmit() {
    console.log("entrou no onSubmit()");
    if (this.loginForm.valid) {
      this.authService.onLogin(this.loginForm.value as ILogin).subscribe({
        next: () => { },
        error: () => {
          this.wrongCredentials = true;
        }

      })
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  get invalidLogin() {
    return this.loginForm.controls.login.invalid && this.loginForm.controls.login.touched;
  }

  get invalidPassword() {
    return this.loginForm.controls.senha.invalid && this.loginForm.controls.senha.touched;
  }

  
}

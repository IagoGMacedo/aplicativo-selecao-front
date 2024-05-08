import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, private authService : AuthService){
    this.loginForm = this.fb.group({
      login: new FormControl('',Validators.required),
      senha: new FormControl('',Validators.required),

    })
    console.log("construiu");
  }

  onSubmit(){
    console.log("entrou no onSubmit()");
    if(this.loginForm.valid){
      this.authService.onLogin(this.loginForm.value).subscribe({
        next: () => {},

      })
    } else{
      this.loginForm.markAllAsTouched();
    }
  }
}

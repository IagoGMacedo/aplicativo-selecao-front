import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm!: FormGroup;

  constructor(private fb: FormBuilder, ){
    this.loginForm = this.fb.group({
      login: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),

    })
  }

  onSubmit(){
    
  }
}

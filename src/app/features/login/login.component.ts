import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  onSubmit() {
    if (this.form.invalid) return;

    // Simulando resposta da API com um ID de usuário
    const fakeLoggedUser = {
      id: crypto.randomUUID(), // substitua com o ID retornado pela API real
      name: this.form.value.name,
      email: this.form.value.email
    };

    localStorage.setItem('userId', fakeLoggedUser.id!);
    alert('Usuário logado com sucesso!');
    this.router.navigate(['/upload-cv']);
  }
}

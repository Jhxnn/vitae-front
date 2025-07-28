import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(private fb: FormBuilder, private router: Router) {}

  onSubmit() {
    if (this.form.invalid) return;

    const fakeUser = {
      id: crypto.randomUUID(), // simula id da API
      name: this.form.value.name,
      email: this.form.value.email
    };

    // Simula cadastro e login imediato
    localStorage.setItem('userId', fakeUser.id!);
    alert('Usuário cadastrado e logado com sucesso!');
    this.router.navigate(['/upload-cv']); // redireciona após cadastro
  }
}

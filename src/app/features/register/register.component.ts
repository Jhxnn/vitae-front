import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  onSubmit() {
    if (this.form.invalid) return;

    const body = {
      name: this.form.value.name,
      email: this.form.value.email
    };

    this.http.post<any>('https://vitae-api.onrender.com/api/v1/user', body)
      .subscribe({
        next: (user) => {
          localStorage.setItem('userId', user.id); // salva ID real
          alert('Usuário cadastrado com sucesso!');
          this.router.navigate(['/upload-cv']);
        },
        error: () => {
          alert('Erro ao cadastrar. Verifique os dados ou tente novamente.');
        }
      });
  }
}

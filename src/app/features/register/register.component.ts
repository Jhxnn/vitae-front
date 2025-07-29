import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from '../../shared/notification.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private notification: NotificationService
  ) {}

  onSubmit() {
  if (this.form.invalid) return;

  this.isLoading = true;

  const body = {
    name: this.form.value.name,
    email: this.form.value.email
  };

  this.http.post<any>('https://vitae-api.onrender.com/api/v1/user', body)
    .subscribe({
      next: (user) => {
        localStorage.setItem('userId', user.userId);
        this.notification.showSuccess('Usuário cadastrado com sucesso!');
        this.router.navigate(['/upload-cv']);
      },
      error: (error) => {
        if (error.status === 409) {
          this.notification.showError('Este e-mail já está cadastrado.');
        } else {
          this.notification.showError('Erro ao cadastrar. Verifique os dados ou tente novamente.');
        }
      }
    }).add(() => this.isLoading = false);
}

}

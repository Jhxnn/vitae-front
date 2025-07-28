import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from '../../shared/notification.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  form = this.fb.group({
    name: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]]
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
    private notification: NotificationService
  ) {}

  onSubmit() {
    if (this.form.invalid) {
      this.notification.showError('Preencha todos os campos corretamente.');
      return;
    }

    const body = {
      name: this.form.value.name,
      email: this.form.value.email
    };

    this.http.post<any>('https://vitae-api.onrender.com/api/v1/user/login', body)
      .subscribe({
        next: (user) => {
          localStorage.setItem('userId', user.id);
          this.notification.showSuccess('Login realizado com sucesso!');
          this.router.navigate(['/upload-cv']);
        },
        error: () => {
          this.notification.showError('Falha no login. Verifique os dados.');
        }
      });
  }
}

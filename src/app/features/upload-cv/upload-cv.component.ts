import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NotificationService } from '../../shared/notification.service';

@Component({
  selector: 'app-upload-cv',
  templateUrl: './upload-cv.component.html',
})
export class UploadCvComponent {
  selectedFile: File | null = null;
  isLoading = false;
  cvResponse: any = null;

  constructor(
    private http: HttpClient,
    private notification: NotificationService
  ) {}

  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    if (file?.type === 'application/pdf') {
      this.selectedFile = file;
    } else {
      this.selectedFile = null;
      this.notification.showError('Selecione um arquivo PDF válido.');
    }
  }

  onSubmit(): void {
    if (!this.selectedFile) {
      this.notification.showError('Nenhum arquivo selecionado.');
      return;
    }

    const userId = localStorage.getItem('userId');
    if (!userId) {
      this.notification.showError('Usuário não identificado.');
      return;
    }

    const formData = new FormData();
    formData.append('file', this.selectedFile);
    formData.append('userId', userId);

    this.isLoading = true;

    this.http.post('https://vitae-api.onrender.com/api/v1/cv', formData).subscribe({
      next: (res) => {
        this.notification.showSuccess('Currículo enviado com sucesso!');
        this.selectedFile = null;
        this.cvResponse = res; 
      },
      error: (err: HttpErrorResponse) => {
        console.error(err);
        this.notification.showError('Erro ao enviar currículo.');
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }
}

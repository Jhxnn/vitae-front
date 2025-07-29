import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-upload-cv',
  templateUrl: './upload-cv.component.html',
})
export class UploadCvComponent {
  selectedFile: File | null = null;
  isLoading = false;

  constructor(
    private http: HttpClient,
    private toastr: ToastrService
  ) {}

  onFileSelected(event: Event): void {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    if (file?.type === 'application/pdf') {
      this.selectedFile = file;
    } else {
      this.selectedFile = null;
      this.toastr.error('Selecione um arquivo PDF válido.');
    }
  }

  onSubmit(): void {
  if (!this.selectedFile) {
    this.toastr.error('Nenhum arquivo selecionado.');
    return;
  }

  const userId = localStorage.getItem('userId');
  if (!userId) {
    this.toastr.error('Usuário não identificado.');
    return;
  }

  const formData = new FormData();
  formData.append('file', this.selectedFile);
  formData.append('userId', userId);

  this.isLoading = true;

  this.http.post('https://vitae-api.onrender.com/api/v1/cv', formData).subscribe({
    next: () => {
      this.toastr.success('Currículo enviado com sucesso!');
      this.selectedFile = null;
    },
    error: (err: HttpErrorResponse) => {
      console.error(err);
      this.toastr.error('Erro ao enviar currículo.');
    },
    complete: () => {
      this.isLoading = false;
    }
  });
}

}

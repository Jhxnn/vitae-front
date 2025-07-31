import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Cv {
  cvId: string;
  grade: number;
  geminiResponse: string;
}

@Component({
  selector: 'app-user-cvs',
  templateUrl: './user-cvs.component.html',
})
export class UserCvsComponent implements OnInit {
  cvs: Cv[] = [];
  isLoading = false;

  showConfirmModal = false;
  cvToDelete: Cv | null = null;

  showSuccessMessage = false;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.loadCvs();
  }

  loadCvs() {
    this.isLoading = true;
    const userId = localStorage.getItem('userId');
    if (!userId) {
      this.isLoading = false;
      return;
    }

    this.http.get<Cv[]>(`https://vitae-api.onrender.com/api/v1/cv/user/${userId}`).subscribe({
      next: (data) => {
        this.cvs = data;
      },
      error: (err) => {
        console.error(err);
      },
      complete: () => {
        this.isLoading = false;
      }
    });
  }

  openConfirmModal(cv: Cv) {
    this.cvToDelete = cv;
    this.showConfirmModal = true;
  }

  cancelDelete() {
    this.closeConfirmModal();
  }

  confirmDelete() {
    if (!this.cvToDelete) return;

    const cvIdToDelete = this.cvToDelete.cvId;
    this.closeConfirmModal();
    this.isLoading = true;

    this.http.delete(`https://vitae-api.onrender.com/api/v1/cv/${cvIdToDelete}`).subscribe({
      next: () => {
        this.loadCvs();
        this.showSuccessMessage = true;

        setTimeout(() => {
          this.showSuccessMessage = false;
        }, 3000);
      },
      error: (err) => {
        console.error(err);
        alert('Erro ao excluir currículo.');
        this.isLoading = false;
      }
    });
  }

  closeConfirmModal() {
    this.showConfirmModal = false;
    this.cvToDelete = null;
  }
}

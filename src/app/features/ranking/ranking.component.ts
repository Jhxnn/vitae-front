import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface RankItem {
  user: { name: string };
  grade: number;
  geminiResponse: string;
}

@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
})
export class RankingComponent implements OnInit {
  ranking: RankItem[] = [];
  isLoading: boolean = true;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get<RankItem[]>('https://vitae-api.onrender.com/api/v1/cv/grade')
      .subscribe({
        next: (data) => {
          this.ranking = data;
          this.isLoading = false;
        },
        error: (err) => {
          console.error('Erro ao carregar ranking', err);
          this.isLoading = false;
        },
      });
  }
}

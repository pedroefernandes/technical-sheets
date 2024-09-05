import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa o CommonModule
import { HttpClient } from '@angular/common/http'
import { Observable, of } from 'rxjs';
import { TechnicalSheetService } from '../../../core/services/technical-sheet.service';
import { TechnicalSheet } from '../../../core/models/technical-sheet.model';

@Component({
  selector: 'app-technical-sheet-list',
  standalone: true,
  imports: [CommonModule], // Adiciona o CommonModule aqui
  templateUrl: './technical-sheet-list.component.html',
})
export class TechnicalSheetListComponent implements OnInit {
  technicalSheets: TechnicalSheet[] = [];
  private baseURL = "http://localhost:8080/api/v1/fichas";

  constructor(
    private technicalSheetService: TechnicalSheetService,
    private httpClient: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.technicalSheetService.getAll().subscribe((sheets) => {
      this.technicalSheets = sheets;
    });
  }

  editSheet(id: number): void {
    this.router.navigate(['/fichas/editar', id]);
  }

  deleteSheet(id: number): void {
    console.log(id);
    this.technicalSheetService.delete(id).subscribe(
      data => {
        console.log('Ficha Técnica excluída:', data);
        this.ngOnInit();
      },
      error => {
        console.error('Erro ao excluir ficha técnica:', error);
      }
    );
  }

  goToDetail(id: number): void {
    this.router.navigate(['/fichas', id]);
  }
  goToNovo(): void {
    this.router.navigate(['/fichas/novo']);
  }

}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common'; // Importa o CommonModule
import { TechnicalSheetService } from '../../../core/services/technical-sheet.service';
import { TechnicalSheet } from '../../../core/models/technical-sheet.model';

@Component({
  selector: 'app-technical-sheet-detail',
  standalone: true,
  imports: [CommonModule], // Adiciona o CommonModule aqui
  templateUrl: './technical-sheet-detail.component.html',
})
export class TechnicalSheetDetailComponent implements OnInit {
  technicalSheet?: TechnicalSheet;

  constructor(
    private route: ActivatedRoute,
    private technicalSheetService: TechnicalSheetService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.technicalSheetService.getById(id).subscribe((sheet) => {
      this.technicalSheet = sheet;
    });
  }
  goToSheets(): void {
    this.ngOnInit();
    this.router.navigate(['/fichas']);
  }
}

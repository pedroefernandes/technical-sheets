import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TechnicalSheetService } from '../../../core/services/technical-sheet.service';

@Component({
  selector: 'app-technical-sheet-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule], // Adicione ReactiveFormsModule aqui
  templateUrl: './technical-sheet-form.component.html',
})
export class TechnicalSheetFormComponent implements OnInit {
  form: FormGroup;
  isEditMode = false;
  sheetId?: number;

  constructor(
    private fb: FormBuilder,
    private technicalSheetService: TechnicalSheetService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group({
      name: ['', Validators.required],
      ingredients: this.fb.array([]), // Array de ingredientes
      totalCost: [0, Validators.required],
      suggestedPrice: [0, Validators.required],
    });
  }

  ngOnInit(): void {
    this.sheetId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.sheetId) {
      this.isEditMode = true;
      this.technicalSheetService.getById(this.sheetId).subscribe((sheet) => {
        if (sheet) {
          this.form.patchValue(sheet);
          this.setIngredients(sheet.ingredients); // Define os ingredientes existentes
        }
      });
    }
  }

  get ingredients(): FormArray {
    return this.form.get('ingredients') as FormArray;
  }

  addIngredient(): void {
    const ingredientForm = this.fb.group({
      name: ['', Validators.required],
      quantity: [1, Validators.required],
      cost: [0, Validators.required],
    });
    this.ingredients.push(ingredientForm);
  }

  removeIngredient(index: number): void {
    this.ingredients.removeAt(index);
  }

  setIngredients(ingredients: any[]): void {
    const ingredientFGs = ingredients.map(ingredient =>
      this.fb.group({
        name: [ingredient.name, Validators.required],
        quantity: [ingredient.quantity, Validators.required],
        cost: [ingredient.cost, Validators.required],
      })
    );
    const ingredientFormArray = this.fb.array(ingredientFGs);
    this.form.setControl('ingredients', ingredientFormArray);
  }
  processForm(): void {
    console.log(this.isEditMode, this.sheetId);

    if (this.isEditMode && this.sheetId) {
      this.technicalSheetService.update(this.sheetId, this.form.value).subscribe(
        data => {
          console.log('Ficha Técnica atualizada:', data);
          this.router.navigate(['/fichas']);
        },
        error => {
          console.error('Erro ao atualizar ficha técnica:', error);
        });
    } else {
      this.technicalSheetService.create(this.form.value).subscribe(
        data => {
          console.log('Ficha Técnica Adicionada:', data);
          this.router.navigate(['/fichas']);
        },
        error => {
          console.error('Erro ao adicionar ficha técnica:', error);
        });
    }
  }
  goToSheets(): void {
    this.router.navigate(['/fichas']);
  }
}

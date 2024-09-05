// src/app/core/models/technical-sheet.ts

export interface TechnicalSheet {
  id: number;
  name: string;
  ingredients: Ingredient[];
  totalCost: number;
  suggestedPrice: number;
}

export interface Ingredient {
  name: string;
  quantity: number;
  cost: number;
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechnicalSheetListComponent } from './features/technical-sheet/technical-sheet-list/technical-sheet-list.component';
import { TechnicalSheetDetailComponent } from './features/technical-sheet/technical-sheet-detail/technical-sheet-detail.component';
import { TechnicalSheetFormComponent } from './features/technical-sheet/technical-sheet-form/technical-sheet-form.component';

export const routes: Routes = [
  { path: '', redirectTo: '/fichas', pathMatch: 'full' },
  { path: 'fichas', component: TechnicalSheetListComponent },
  { path: 'fichas/novo', component: TechnicalSheetFormComponent },
  { path: 'fichas/:id', component: TechnicalSheetDetailComponent },
  { path: 'fichas/editar/:id', component: TechnicalSheetFormComponent },
  { path: '**', redirectTo: '/fichas' } // Rota coringa para redirecionar em caso de rota não encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalSheetListComponent } from './technical-sheet-list.component';

describe('TechnicalSheetListComponent', () => {
  let component: TechnicalSheetListComponent;
  let fixture: ComponentFixture<TechnicalSheetListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalSheetListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalSheetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

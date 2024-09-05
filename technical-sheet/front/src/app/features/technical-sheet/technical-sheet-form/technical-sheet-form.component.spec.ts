import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalSheetFormComponent } from './technical-sheet-form.component';

describe('TechnicalSheetFormComponent', () => {
  let component: TechnicalSheetFormComponent;
  let fixture: ComponentFixture<TechnicalSheetFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalSheetFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalSheetFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

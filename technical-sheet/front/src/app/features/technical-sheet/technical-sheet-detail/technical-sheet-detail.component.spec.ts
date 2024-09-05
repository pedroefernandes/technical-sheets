import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnicalSheetDetailComponent } from './technical-sheet-detail.component';

describe('TechnicalSheetDetailComponent', () => {
  let component: TechnicalSheetDetailComponent;
  let fixture: ComponentFixture<TechnicalSheetDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnicalSheetDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnicalSheetDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
